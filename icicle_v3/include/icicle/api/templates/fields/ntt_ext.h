extern "C" eIcicleError ${FIELD}_extension_ntt(
  const ${FIELD}::extension_t* input, int size, NTTDir dir, NTTConfig<${FIELD}::scalar_t>& config, ${FIELD}::extension_t* output);