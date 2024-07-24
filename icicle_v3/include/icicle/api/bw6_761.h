// WARNING: This file is auto-generated by a script.
// Any changes made to this file may be overwritten.
// Please modify the code generation script instead.
// Path to the code generation script: scripts/gen_c_api.py

#pragma once

#include "icicle/curves/params/bw6_761.h"
#include "icicle/ntt.h"
#include "icicle/msm.h"
#include "icicle/vec_ops.h"

extern "C" eIcicleError bw6_761_g2_precompute_msm_bases(
  const bw6_761::g2_affine_t* bases,
  int nof_bases,
  const MSMConfig& config,
  bw6_761::g2_affine_t* output_bases);

extern "C" eIcicleError bw6_761_g2_msm(
  const bw6_761::scalar_t* scalars, const bw6_761::g2_affine_t* points, int msm_size, const MSMConfig& config, bw6_761::g2_projective_t* out);

extern "C" eIcicleError bw6_761_precompute_msm_bases(
  const bw6_761::affine_t* bases,
  int nof_bases,
  const MSMConfig& config,
  bw6_761::affine_t* output_bases);

extern "C" eIcicleError bw6_761_msm(
  const bw6_761::scalar_t* scalars, const bw6_761::affine_t* points, int msm_size, const MSMConfig& config, bw6_761::projective_t* out);

extern "C" bool bw6_761_g2_eq(bw6_761::g2_projective_t* point1, bw6_761::g2_projective_t* point2);

extern "C" void bw6_761_g2_to_affine(bw6_761::g2_projective_t* point, bw6_761::g2_affine_t* point_out);

extern "C" void bw6_761_g2_generate_projective_points(bw6_761::g2_projective_t* points, int size);

extern "C" void bw6_761_g2_generate_affine_points(bw6_761::g2_affine_t* points, int size);

extern "C" eIcicleError bw6_761_g2_affine_convert_montgomery(
  const bw6_761::g2_affine_t* input, size_t n, bool is_into, const VecOpsConfig& config, bw6_761::g2_affine_t* output);

extern "C" eIcicleError bw6_761_g2_projective_convert_montgomery(
  const bw6_761::g2_projective_t* input, size_t n, bool is_into, const VecOpsConfig& config, bw6_761::g2_projective_t* output);  

extern "C" eIcicleError bw6_761_ecntt(
  const bw6_761::projective_t* input, int size, NTTDir dir, NTTConfig<bw6_761::scalar_t>& config, bw6_761::projective_t* output);

extern "C" bool bw6_761_eq(bw6_761::projective_t* point1, bw6_761::projective_t* point2);

extern "C" void bw6_761_to_affine(bw6_761::projective_t* point, bw6_761::affine_t* point_out);

extern "C" void bw6_761_generate_projective_points(bw6_761::projective_t* points, int size);

extern "C" void bw6_761_generate_affine_points(bw6_761::affine_t* points, int size);

extern "C" eIcicleError bw6_761_affine_convert_montgomery(
  const bw6_761::affine_t* input, size_t n, bool is_into, const VecOpsConfig& config, bw6_761::affine_t* output);

extern "C" eIcicleError bw6_761_projective_convert_montgomery(
  const bw6_761::projective_t* input, size_t n, bool is_into, const VecOpsConfig& config, bw6_761::projective_t* output);  

extern "C" eIcicleError bw6_761_vector_mul(
  const bw6_761::scalar_t* vec_a, const bw6_761::scalar_t* vec_b, uint64_t n, const VecOpsConfig& config, bw6_761::scalar_t* result);

extern "C" eIcicleError bw6_761vector_add(
  const bw6_761::scalar_t* vec_a, const bw6_761::scalar_t* vec_b, uint64_t n, const VecOpsConfig& config, bw6_761::scalar_t* result);

// extern "C" eIcicleError bw6_761_accumulate_cuda(
//   const bw6_761::scalar_t* vec_a, const bw6_761::scalar_t* vec_b, uint64_t n, const VecOpsConfig& config);

extern "C" eIcicleError bw6_761_vector_sub(
  const bw6_761::scalar_t* vec_a, const bw6_761::scalar_t* vec_b, uint64_t n, const VecOpsConfig& config, bw6_761::scalar_t* result);

extern "C" eIcicleError bw6_761_transpose_matrix(
  const bw6_761::scalar_t* input,
  uint32_t nof_rows,
  uint32_t nof_cols,
  const VecOpsConfig& config,
  bw6_761::scalar_t* output);

extern "C" eIcicleError bw6_761_bit_reverse(
  const bw6_761::scalar_t* input, uint64_t n, const VecOpsConfig& config, bw6_761::scalar_t* output);


extern "C" void bw6_761_generate_scalars(bw6_761::scalar_t* scalars, int size);

extern "C" void bw6_761_scalar_convert_montgomery(
  const bw6_761::scalar_t* input, uint64_t size, bool is_into, const VecOpsConfig& config, bw6_761::scalar_t* output);

extern "C" eIcicleError bw6_761_initialize_domain(
  bw6_761::scalar_t* primitive_root, const NTTInitDomainConfig& config);

extern "C" eIcicleError bw6_761_ntt(
  const bw6_761::scalar_t* input, int size, NTTDir dir, NTTConfig<bw6_761::scalar_t>& config, bw6_761::scalar_t* output);

extern "C" eIcicleError bw6_761_release_domain();

