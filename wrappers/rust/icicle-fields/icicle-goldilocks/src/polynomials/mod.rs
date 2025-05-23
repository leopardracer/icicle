use crate::field::{ScalarCfg, ScalarField};
use icicle_core::impl_univariate_polynomial_api;

impl_univariate_polynomial_api!("goldilocks", goldilocks, ScalarField, ScalarCfg);

#[cfg(test)]
mod tests {
    use icicle_core::impl_polynomial_tests;
    impl_polynomial_tests!(goldilocks, ScalarField);
}
