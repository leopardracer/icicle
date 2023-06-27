
// Copyright 2023 Ingonyama
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
	
// Code generated by Ingonyama DO NOT EDIT


#include <stdbool.h>
#include <cuda.h>
#include <cuda_runtime.h>
// msm.h

#ifndef _BN254_MSM_H
#define _BN254_MSM_H

#ifdef __cplusplus
extern "C" {
#endif

// Incomplete declaration of BN254 projective and affine structs
typedef struct BN254_projective_t BN254_projective_t;
typedef struct BN254_affine_t BN254_affine_t;
typedef struct BN254_scalar_t BN254_scalar_t;
typedef cudaStream_t CudaStream_t;

int msm_cuda_bn254(BN254_projective_t* out, BN254_affine_t* points,
                   BN254_scalar_t* scalars, size_t count, size_t device_id);

int msm_batch_cuda_bn254(BN254_projective_t* out, BN254_affine_t* points,
                         BN254_scalar_t* scalars, size_t batch_size,
                         size_t msm_size, size_t device_id);

int commit_cuda_bn254(BN254_projective_t* d_out, BN254_scalar_t* d_scalars,
                      BN254_affine_t* d_points, size_t count, size_t device_id);

int commit_batch_cuda_bn254(BN254_projective_t* d_out, BN254_scalar_t* d_scalars,
                            BN254_affine_t* d_points, size_t count,
                            size_t batch_size, size_t device_id);

#ifdef __cplusplus
}
#endif

#endif /* _BN254_MSM_H */
