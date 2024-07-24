extern "C" eIcicleError ${CURVE}_precompute_msm_bases(
  const ${CURVE}::affine_t* bases,
  int nof_bases,
  const MSMConfig& config,
  ${CURVE}::affine_t* output_bases);

extern "C" eIcicleError ${CURVE}_msm(
  const ${CURVE}::scalar_t* scalars, const ${CURVE}::affine_t* points, int msm_size, const MSMConfig& config, ${CURVE}::projective_t* out);