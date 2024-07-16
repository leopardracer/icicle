#include "icicle/vec_ops.h"
#include "icicle/dispatcher.h"

namespace icicle {

  /*********************************** ADD ***********************************/
  ICICLE_DISPATCHER_INST(VectorAddDispatcher, vector_add, scalarVectorOpImpl);

  extern "C" eIcicleError CONCAT_EXPAND(FIELD, vector_add)(
    const scalar_t* vec_a, const scalar_t* vec_b, uint64_t n, const VecOpsConfig& config, scalar_t* output)
  {
    return VectorAddDispatcher::execute(vec_a, vec_b, n, config, output);
  }

  template <>
  eIcicleError
  vector_add(const scalar_t* vec_a, const scalar_t* vec_b, uint64_t n, const VecOpsConfig& config, scalar_t* output)
  {
    return CONCAT_EXPAND(FIELD, vector_add)(vec_a, vec_b, n, config, output);
  }

#ifdef EXT_FIELD
  ICICLE_DISPATCHER_INST(VectorAddExtFieldDispatcher, extension_vector_add, extFieldVectorOpImpl);

  extern "C" eIcicleError CONCAT_EXPAND(FIELD, extension_vector_add)(
    const extension_t* vec_a, const extension_t* vec_b, uint64_t n, const VecOpsConfig& config, extension_t* output)
  {
    return VectorAddExtFieldDispatcher::execute(vec_a, vec_b, n, config, output);
  }

  template <>
  eIcicleError vector_add(
    const extension_t* vec_a, const extension_t* vec_b, uint64_t n, const VecOpsConfig& config, extension_t* output)
  {
    return CONCAT_EXPAND(FIELD, extension_vector_add)(vec_a, vec_b, n, config, output);
  }
#endif // EXT_FIELD

  /*********************************** SUB ***********************************/
  ICICLE_DISPATCHER_INST(VectorSubDispatcher, vector_sub, scalarVectorOpImpl);

  extern "C" eIcicleError CONCAT_EXPAND(FIELD, vector_sub)(
    const scalar_t* vec_a, const scalar_t* vec_b, uint64_t n, const VecOpsConfig& config, scalar_t* output)
  {
    return VectorSubDispatcher::execute(vec_a, vec_b, n, config, output);
  }

  template <>
  eIcicleError
  vector_sub(const scalar_t* vec_a, const scalar_t* vec_b, uint64_t n, const VecOpsConfig& config, scalar_t* output)
  {
    return CONCAT_EXPAND(FIELD, vector_sub)(vec_a, vec_b, n, config, output);
  }

#ifdef EXT_FIELD
  ICICLE_DISPATCHER_INST(VectorSubExtFieldDispatcher, extension_vector_sub, extFieldVectorOpImpl);

  extern "C" eIcicleError CONCAT_EXPAND(FIELD, extension_vector_sub)(
    const extension_t* vec_a, const extension_t* vec_b, uint64_t n, const VecOpsConfig& config, extension_t* output)
  {
    return VectorSubExtFieldDispatcher::execute(vec_a, vec_b, n, config, output);
  }

  template <>
  eIcicleError vector_sub(
    const extension_t* vec_a, const extension_t* vec_b, uint64_t n, const VecOpsConfig& config, extension_t* output)
  {
    return CONCAT_EXPAND(FIELD, extension_vector_sub)(vec_a, vec_b, n, config, output);
  }
#endif // EXT_FIELD

  /*********************************** MUL ***********************************/
  ICICLE_DISPATCHER_INST(VectorMulDispatcher, vector_mul, scalarVectorOpImpl);

  extern "C" eIcicleError CONCAT_EXPAND(FIELD, vector_mul)(
    const scalar_t* vec_a, const scalar_t* vec_b, uint64_t n, const VecOpsConfig& config, scalar_t* output)
  {
    return VectorMulDispatcher::execute(vec_a, vec_b, n, config, output);
  }

  template <>
  eIcicleError
  vector_mul(const scalar_t* vec_a, const scalar_t* vec_b, uint64_t n, const VecOpsConfig& config, scalar_t* output)
  {
    return CONCAT_EXPAND(FIELD, vector_mul)(vec_a, vec_b, n, config, output);
  }

#ifdef EXT_FIELD
  ICICLE_DISPATCHER_INST(VectorMulExtFieldDispatcher, extension_vector_mul, extFieldVectorOpImpl);

  extern "C" eIcicleError CONCAT_EXPAND(FIELD, extension_vector_mul)(
    const extension_t* vec_a, const extension_t* vec_b, uint64_t n, const VecOpsConfig& config, extension_t* output)
  {
    return VectorMulExtFieldDispatcher::execute(vec_a, vec_b, n, config, output);
  }

  template <>
  eIcicleError vector_mul(
    const extension_t* vec_a, const extension_t* vec_b, uint64_t n, const VecOpsConfig& config, extension_t* output)
  {
    return CONCAT_EXPAND(FIELD, extension_vector_mul)(vec_a, vec_b, n, config, output);
  }
#endif // EXT_FIELD

  /*********************************** MUL BY SCALAR ***********************************/
  ICICLE_DISPATCHER_INST(ScalarMulDispatcher, scalar_mul, scalarVectorOpImpl);

  extern "C" eIcicleError CONCAT_EXPAND(FIELD, scalar_mul)(
    const scalar_t* scalar_a, const scalar_t* vec_b, uint64_t n, const VecOpsConfig& config, scalar_t* output)
  {
    return ScalarMulDispatcher::execute(scalar_a, vec_b, n, config, output);
  }

  template <>
  eIcicleError
  scalar_mul(const scalar_t* scalar_a, const scalar_t* vec_b, uint64_t n, const VecOpsConfig& config, scalar_t* output)
  {
    return CONCAT_EXPAND(FIELD, scalar_mul)(scalar_a, vec_b, n, config, output);
  }

  /*********************************** CONVERT MONTGOMERY ***********************************/

  ICICLE_DISPATCHER_INST(ScalarConvertMontgomeryDispatcher, scalar_convert_montgomery, scalarConvertMontgomeryImpl)

  extern "C" eIcicleError CONCAT_EXPAND(FIELD, scalar_convert_montgomery)(
    const scalar_t* input, uint64_t size, bool is_into, const VecOpsConfig& config, scalar_t* output)
  {
    return ScalarConvertMontgomeryDispatcher::execute(input, size, is_into, config, output);
  }

  template <>
  eIcicleError
  convert_montgomery(const scalar_t* input, uint64_t size, bool is_into, const VecOpsConfig& config, scalar_t* output)
  {
    return CONCAT_EXPAND(FIELD, scalar_convert_montgomery)(input, size, is_into, config, output);
  }

#ifdef EXT_FIELD
  ICICLE_DISPATCHER_INST(
    ExtFieldConvertMontgomeryDispatcher, extension_scalar_convert_montgomery, extFieldConvertMontgomeryImpl)

  extern "C" eIcicleError CONCAT_EXPAND(FIELD, extension_scalar_convert_montgomery)(
    const extension_t* input, uint64_t size, bool is_into, const VecOpsConfig& config, extension_t* output)
  {
    return ExtFieldConvertMontgomeryDispatcher::execute(input, size, is_into, config, output);
  }

  template <>
  eIcicleError convert_montgomery(
    const extension_t* input, uint64_t size, bool is_into, const VecOpsConfig& config, extension_t* output)
  {
    return CONCAT_EXPAND(FIELD, extension_scalar_convert_montgomery)(input, size, is_into, config, output);
  }
#endif // EXT_FIELD

  /*********************************** BIT REVERSE ***********************************/

  ICICLE_DISPATCHER_INST(ScalarBitReverseDispatcher, scalar_bit_reverse, scalarBitReverseOpImpl)

  extern "C" eIcicleError
  CONCAT_EXPAND(FIELD, bit_reverse)(const scalar_t* input, uint64_t size, const VecOpsConfig& config, scalar_t* output)
  {
    return ScalarBitReverseDispatcher::execute(input, size, config, output);
  }

  template <>
  eIcicleError bit_reverse(const scalar_t* input, uint64_t size, const VecOpsConfig& config, scalar_t* output)
  {
    return CONCAT_EXPAND(FIELD, bit_reverse)(input, size, config, output);
  }

#ifdef EXT_FIELD
  ICICLE_DISPATCHER_INST(ExtFieldBitReverseDispatcher, extension_bit_reverse, extFieldBitReverseOpImpl)

  extern "C" eIcicleError CONCAT_EXPAND(FIELD, extension_bit_reverse)(
    const extension_t* input, uint64_t size, const VecOpsConfig& config, extension_t* output)
  {
    return ExtFieldBitReverseDispatcher::execute(input, size, config, output);
  }

  template <>
  eIcicleError bit_reverse(const extension_t* input, uint64_t size, const VecOpsConfig& config, extension_t* output)
  {
    return CONCAT_EXPAND(FIELD, extension_bit_reverse)(input, size, config, output);
  }
#endif // EXT_FIELD

  /*********************************** SLICE ***********************************/

  ICICLE_DISPATCHER_INST(ScalarSliceDispatcher, slice, scalarSliceOpImpl)

  extern "C" eIcicleError CONCAT_EXPAND(FIELD, slice)(
    const scalar_t* input,
    uint64_t offset,
    uint64_t stride,
    uint64_t size,
    const VecOpsConfig& config,
    scalar_t* output)
  {
    return ScalarSliceDispatcher::execute(input, offset, stride, size, config, output);
  }

  template <>
  eIcicleError slice(
    const scalar_t* input,
    uint64_t offset,
    uint64_t stride,
    uint64_t size,
    const VecOpsConfig& config,
    scalar_t* output)
  {
    return CONCAT_EXPAND(FIELD, slice)(input, offset, stride, size, config, output);
  }

#ifdef EXT_FIELD_
  ICICLE_DISPATCHER_INST(ExtFieldSliceDispatcher, extension_slice, extFieldSliceOpImpl)

  extern "C" eIcicleError CONCAT_EXPAND(FIELD, extension_slice)(
    const extension_t* input,
    uint64_t offset,
    uint64_t stride,
    uint64_t size,
    const VecOpsConfig& config,
    extension_t* output)
  {
    return ExtFieldSliceDispatcher::execute(input, offset, stride, size, config, output);
  }

  template <>
  eIcicleError slice(
    const extension_t* input,
    uint64_t offset,
    uint64_t stride,
    uint64_t size,
    const VecOpsConfig& config,
    extension_t* output)
  {
    return CONCAT_EXPAND(FIELD, extension_slice)(input, offset, stride, size, config, output);
  }
#endif // EXT_FIELD

} // namespace icicle