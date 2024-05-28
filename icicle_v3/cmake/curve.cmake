function(check_curve)
  set(SUPPORTED_CURVES bn254;bls12_381;bls12_377;bw6_761;grumpkin)

  set(IS_CURVE_SUPPORTED FALSE)
  set(I 0)
  foreach (SUPPORTED_CURVE ${SUPPORTED_CURVES})
    math(EXPR I "${I} + 1")
    if (CURVE STREQUAL SUPPORTED_CURVE)      
      add_compile_definitions(FIELD_ID=${I})
      add_compile_definitions(DCURVE_ID=${I})
      add_compile_definitions(FIELD=${CURVE})
      add_compile_definitions(CURVE=${CURVE})
      set(IS_CURVE_SUPPORTED TRUE)
    endif ()
  endforeach()

  if (NOT IS_CURVE_SUPPORTED)
    message( FATAL_ERROR "The value of CURVE variable: ${CURVE} is not one of the supported curves: ${SUPPORTED_CURVES}" )
  endif ()
endfunction()

function(setup_curve_target)
  set(FIELD ${CURVE})
  setup_field_target()  

  # Make sure CURVE is defined in the cache for backends to see
  set(CURVE "${CURVE}" CACHE STRING "")
  
  # TODO Yuval: curve target
endfunction()