use icicle_cuda_runtime::{
    device_context::{get_default_device_context, DeviceContext},
    memory::HostOrDeviceSlice,
};

use crate::{error::IcicleResult, traits::FieldImpl};

#[doc(hidden)]
pub mod tests;

#[repr(C)]
#[derive(Debug, Clone)]
pub struct TreeBuilderConfig<'a> {
    pub ctx: DeviceContext<'a>,

    keep_rows: u32,

    are_inputs_on_device: bool,

    /// Whether to run build_merkle_tree asynchronously. If set to `true`, TreeBuilder will be non-blocking
    /// and you'd need to synchronize it explicitly by running `cudaStreamSynchronize` or `cudaDeviceSynchronize`.
    /// If set to `false`, build_merkle_tree will block the current CPU thread.
    pub is_async: bool,
}

impl<'a> Default for TreeBuilderConfig<'a> {
    fn default() -> Self {
        let ctx = get_default_device_context();
        Self {
            ctx,
            keep_rows: 0,
            are_inputs_on_device: false,
            is_async: false,
        }
    }
}

pub fn merkle_tree_digests_len(height: u32, arity: u32) -> usize {
    let mut digests_len = 0usize;
    let mut row_length = 1;
    for _ in 1..height {
        digests_len += row_length;
        row_length *= arity as usize;
    }
    digests_len
}

pub trait TreeBuilder<F: FieldImpl> {
    fn build_tree_unchecked(
        leaves: &mut HostOrDeviceSlice<F>,
        digests: &mut [F],
        height: u32,
        arity: u32,
        config: &TreeBuilderConfig,
    ) -> IcicleResult<()>;
}

pub fn build_merkle_tree<F>(
    leaves: &mut HostOrDeviceSlice<F>,
    digests: &mut [F],
    height: u32,
    arity: u32,
    config: &TreeBuilderConfig,
) -> IcicleResult<()>
where
    F: FieldImpl,
    <F as FieldImpl>::Config: TreeBuilder<F>,
{
    let leaves_len = 1 << (height - 1) as usize;
    if leaves.len() != leaves_len {
        panic!("Leaves len is {}; but needs to be exactly {}", leaves.len(), leaves_len,);
    }

    let digests_len = merkle_tree_digests_len(height, arity);
    if digests.len() != digests_len as usize {
        panic!(
            "Digests len is {}; but needs to be exactly {}",
            digests.len(),
            digests_len
        );
    }

    let mut local_cfg = config.clone();
    local_cfg.are_inputs_on_device = leaves.is_on_device();

    <<F as FieldImpl>::Config as TreeBuilder<F>>::build_tree_unchecked(leaves, digests, height, arity, &local_cfg)
}

#[macro_export]
macro_rules! impl_tree_builder {
    (
      $field_prefix:literal,
      $field_prefix_ident:ident,
      $field:ident,
      $field_config:ident
    ) => {
        mod $field_prefix_ident {
            use crate::tree::{$field, $field_config, CudaError, DeviceContext, TreeBuilderConfig};
            extern "C" {
                #[link_name = concat!($field_prefix, "BuildMerkleTree")]
                pub(crate) fn _build_merkle_tree(
                    leaves: *mut $field,
                    digests: *mut $field,
                    height: u32,
                    arity: u32,
                    config: &TreeBuilderConfig,
                ) -> CudaError;
            }
        }

        impl TreeBuilder<$field> for $field_config {
            fn build_tree_unchecked(
                leaves: &mut HostOrDeviceSlice<$field>,
                digests: &mut [$field],
                height: u32,
                arity: u32,
                config: &TreeBuilderConfig,
            ) -> IcicleResult<()> {
                unsafe {
                    $field_prefix_ident::_build_merkle_tree(
                        leaves.as_mut_ptr(),
                        digests as *mut _ as *mut $field,
                        height,
                        arity,
                        config,
                    )
                    .wrap()
                }
            }
        }
    };
}

#[macro_export]
macro_rules! impl_tree_builder_tests {
    (
      $field:ident
    ) => {
        const SUPPORTED_ARITIES: [u32; 4] = [2, 4, 8, 11];
        static INIT: OnceLock<()> = OnceLock::new();

        #[test]
        fn test_build_merkle_tree() {
            INIT.get_or_init(move || init_poseidon::<$field>(&SUPPORTED_ARITIES));
            check_build_merkle_tree::<$field>()
        }
    };
}
