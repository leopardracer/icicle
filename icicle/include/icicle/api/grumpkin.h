// WARNING: This file is auto-generated by a script.
// Any changes made to this file may be overwritten.
// Please modify the code generation script instead.
// Path to the code generation script: scripts/gen_c_api.py

#pragma once

#include "icicle/curves/params/grumpkin.h"
#include "icicle/msm.h"
#include "icicle/vec_ops.h"

extern "C" eIcicleError grumpkin_precompute_msm_bases(
  const grumpkin::affine_t* bases,
  int nof_bases,
  const MSMConfig& config,
  grumpkin::affine_t* output_bases);

extern "C" eIcicleError grumpkin_msm(
  const grumpkin::scalar_t* scalars, const grumpkin::affine_t* points, int msm_size, const MSMConfig& config, grumpkin::projective_t* out);

extern "C" bool grumpkin_eq(grumpkin::projective_t* point1, grumpkin::projective_t* point2);

extern "C" void grumpkin_to_affine(grumpkin::projective_t* point, grumpkin::affine_t* point_out);

extern "C" void grumpkin_generate_projective_points(grumpkin::projective_t* points, int size);

extern "C" void grumpkin_generate_affine_points(grumpkin::affine_t* points, int size);

extern "C" eIcicleError grumpkin_affine_convert_montgomery(
  const grumpkin::affine_t* input, size_t n, bool is_into, const VecOpsConfig& config, grumpkin::affine_t* output);

extern "C" eIcicleError grumpkin_projective_convert_montgomery(
  const grumpkin::projective_t* input, size_t n, bool is_into, const VecOpsConfig& config, grumpkin::projective_t* output);  

extern "C" void grumpkin_generate_scalars(grumpkin::scalar_t* scalars, int size);

extern "C" void grumpkin_scalar_convert_montgomery(
  const grumpkin::scalar_t* input, uint64_t size, bool is_into, const VecOpsConfig& config, grumpkin::scalar_t* output);

extern "C" eIcicleError grumpkin_vector_mul(
  const grumpkin::scalar_t* vec_a, const grumpkin::scalar_t* vec_b, uint64_t n, const VecOpsConfig& config, grumpkin::scalar_t* result);

extern "C" eIcicleError grumpkin_vector_add(
  const grumpkin::scalar_t* vec_a, const grumpkin::scalar_t* vec_b, uint64_t n, const VecOpsConfig& config, grumpkin::scalar_t* result);

extern "C" eIcicleError grumpkin_vector_sub(
  const grumpkin::scalar_t* vec_a, const grumpkin::scalar_t* vec_b, uint64_t n, const VecOpsConfig& config, grumpkin::scalar_t* result);

extern "C" eIcicleError grumpkin_matrix_transpose(
  const grumpkin::scalar_t* input,
  uint32_t nof_rows,
  uint32_t nof_cols,
  const VecOpsConfig& config,
  grumpkin::scalar_t* output);

extern "C" eIcicleError grumpkin_bit_reverse(
  const grumpkin::scalar_t* input, uint64_t n, const VecOpsConfig& config, grumpkin::scalar_t* output);


