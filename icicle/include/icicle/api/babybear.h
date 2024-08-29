// WARNING: This file is auto-generated by a script.
// Any changes made to this file may be overwritten.
// Please modify the code generation script instead.
// Path to the code generation script: scripts/gen_c_api.py

#pragma once

#include "icicle/fields/stark_fields/babybear.h"
#include "icicle/ntt.h"
#include "icicle/vec_ops.h"

extern "C" void babybear_generate_scalars(babybear::scalar_t* scalars, int size);

extern "C" void babybear_scalar_convert_montgomery(
  const babybear::scalar_t* input, uint64_t size, bool is_into, const VecOpsConfig& config, babybear::scalar_t* output);

extern "C" eIcicleError babybear_ntt_init_domain(
  babybear::scalar_t* primitive_root, const NTTInitDomainConfig& config);

extern "C" eIcicleError babybear_ntt(
  const babybear::scalar_t* input, int size, NTTDir dir, const NTTConfig<babybear::scalar_t>& config, babybear::scalar_t* output);

extern "C" eIcicleError babybear_ntt_release_domain();

extern "C" eIcicleError babybear_extension_vector_mul(
  const babybear::extension_t* vec_a, const babybear::extension_t* vec_b, uint64_t n, const VecOpsConfig& config, babybear::extension_t* result);

extern "C" eIcicleError babybear_extension_vector_add(
  const babybear::extension_t* vec_a, const babybear::extension_t* vec_b, uint64_t n, const VecOpsConfig& config, babybear::extension_t* result);

extern "C" eIcicleError babybear_extension_vector_sub(
  const babybear::extension_t* vec_a, const babybear::extension_t* vec_b, uint64_t n, const VecOpsConfig& config, babybear::extension_t* result);

extern "C" eIcicleError babybear_extension_matrix_transpose(
  const babybear::extension_t* input,
  uint32_t nof_rows,
  uint32_t nof_cols,
  const VecOpsConfig& config,
  babybear::extension_t* output);

extern "C" eIcicleError babybear_extension_bit_reverse(
  const babybear::extension_t* input, uint64_t n, const VecOpsConfig& config, babybear::extension_t* output);


extern "C" void babybear_extension_generate_scalars(babybear::extension_t* scalars, int size);

extern "C" eIcicleError babybear_extension_scalar_convert_montgomery(  
  const babybear::extension_t* input, uint64_t size, bool is_into, const VecOpsConfig& config, babybear::extension_t* output);

extern "C" eIcicleError babybear_vector_mul(
  const babybear::scalar_t* vec_a, const babybear::scalar_t* vec_b, uint64_t n, const VecOpsConfig& config, babybear::scalar_t* result);

extern "C" eIcicleError babybear_vector_add(
  const babybear::scalar_t* vec_a, const babybear::scalar_t* vec_b, uint64_t n, const VecOpsConfig& config, babybear::scalar_t* result);

extern "C" eIcicleError babybear_vector_sub(
  const babybear::scalar_t* vec_a, const babybear::scalar_t* vec_b, uint64_t n, const VecOpsConfig& config, babybear::scalar_t* result);

extern "C" eIcicleError babybear_matrix_transpose(
  const babybear::scalar_t* input,
  uint32_t nof_rows,
  uint32_t nof_cols,
  const VecOpsConfig& config,
  babybear::scalar_t* output);

extern "C" eIcicleError babybear_bit_reverse(
  const babybear::scalar_t* input, uint64_t n, const VecOpsConfig& config, babybear::scalar_t* output);


extern "C" eIcicleError babybear_extension_ntt(
  const babybear::extension_t* input, int size, NTTDir dir, const NTTConfig<babybear::scalar_t>& config, babybear::extension_t* output);

