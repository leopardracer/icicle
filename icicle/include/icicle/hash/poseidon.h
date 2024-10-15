#pragma once

#include "icicle/hash/hash.h"

namespace icicle {

  // Options for generating the on-device Poseidon constants.
  // This struct will hold parameters needed to initialize Poseidon constants with custom settings.
  // The fields will include:
  // - `arity`: The arity (branching factor) of the Poseidon hash.
  // - `alpha`: The exponent used in the S-box function.
  // - `nof_rounds`: The number of rounds (both full and partial) for the Poseidon hash.
  // - `mds_matrix`: The Maximum Distance Separable (MDS) matrix used for mixing the state.
  // The struct should be FFI (Foreign Function Interface) compatible, meaning it should use basic types or pointers
  // that can easily be shared between languages. The template parameter `S` represents the field type for which the
  // Poseidon constants are being initialized.
  template <typename S>
  struct PoseidonConstantsOptions {
    // TODO: Define the struct with fields such as arity, alpha, nof_rounds, mds_matrix, etc.
    // It must be compatible with FFI, so make sure to use only types like integers, arrays, and pointers.
    bool          is_domain_tag = false;  ///< If i_domain_tag is set then single hash width = arity + 1, otherwise width = arity.
    unsigned int  arity;                  ///< Arity of a hash (number of inputs of the single hash).
    unsigned int  alpha;                  ///< Sbox power.
    unsigned int  nof_upper_full_rounds;  ///< Number of upper full rounds of a single hash.
    unsigned int  nof_partial_rounds;     ///< Number of partial rounds of a single hash.
    unsigned int  nof_end_full_rounds;    ///< Number of bottom full rounds of a single hash.
    S*            rounds_constants;       ///< Round constants (both of the full and the partial rounds). The order of the constants in the memory is according to the rounds order.
    S*            mds_matrix;             ///> MDS matrix used in the full rounds. The same matrix is used for all the full rounds.
    S*            pre_matrix;             ///< Pre-matrix used in the last upper full round.
    S*            sparse_matrices;        ///< Sparse matries that are used in the partial rounds. A single aprse matrix in the memory has "arity x arity" members. The calculation is done only on the member that not equal to zero.
  };

  // Function to generate and initialize Poseidon constants based on user-defined options.
  // This function allows the user to customize the initialization of Poseidon constants by providing their own
  // parameters. It is important to call this function per arity (branching factor) because the constants depend on the
  // arity. The template parameter `S` represents the field type (e.g., scalar field) for which the constants are being
  // initialized.
  template <typename S>
  eIcicleError poseidon_init_constants(const PoseidonConstantsOptions<S>* options);

  // Function to initialize Poseidon constants using default, precomputed values.
  // These constants are optimized and precomputed for the given field and arity.
  // The arity must be supported by the implementation (i.e., predefined sets of constants exist for the supported
  // arities). This function simplifies initialization when custom constants are not needed, and the user can rely on
  // default values.
  template <typename S>
  eIcicleError poseidon_init_default_constants();

  // Function to create a Poseidon hash object for a given arity.
  // This function returns a `Hash` object configured to use the Poseidon hash for the specified arity.
  // The arity controls the number of inputs the hash function can take (branching factor).
  template <typename S>
  Hash create_poseidon_hash(unsigned arity);

  // Poseidon struct providing a static interface to Poseidon-related operations.
  struct Poseidon {
    // Static method to create a Poseidon hash object.
    // This method provides a simple API for creating a Poseidon hash object, hiding the complexity of template
    // parameters from the user. It uses the specified `arity` to create the Poseidon hash.
    template <typename S>
    inline static Hash create(unsigned arity)
    {
      return create_poseidon_hash<S>(arity);
    }

    // Static method to initialize Poseidon constants based on user-defined options.
    // This method abstracts away the complexity of calling the `poseidon_init_constants` function directly,
    // providing a clean interface to initialize Poseidon constants.
    // The user provides a pointer to `PoseidonConstantsOptions` to customize the constants.
    template <typename S>
    inline static eIcicleError init_constants(const PoseidonConstantsOptions<S>* options)
    {
      return poseidon_init_constants<S>(options);
    }

    // Static method to initialize Poseidon constants with default values.
    // This provides a clean interface for initializing Poseidon with precomputed default constants for the given field
    // and arity. Useful when the user doesn't need to customize the constants and wants to use pre-optimized
    // parameters.
    template <typename S>
    inline static eIcicleError init_default_constants()
    {
      return poseidon_init_default_constants<S>();
    }
  };

} // namespace icicle