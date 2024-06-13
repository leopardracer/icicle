
#pragma once

#include "icicle/device.h"
#include "icicle/device_api.h"
#include "icicle/errors.h"

using namespace icicle;

/**
 * @brief Search and load icicle backed to process
 *

 * @param path Path of the backend library or directory where backend libraries are installed
 * @return eIcicleError Status of the loaded backend
 */
extern "C" eIcicleError icicle_load_backend(const std::string& path, bool is_recursive);

/**
 * @brief Set active device for thread
 *

 * @return eIcicleError Status of the device set
 */
extern "C" eIcicleError icicle_set_device(const icicle::Device& device);

/**
 * @brief Allocates memory on the specified device.
 *
 * @param ptr Pointer to the allocated memory.
 * @param size Size of the memory to allocate.
 * @return eIcicleError Status of the memory allocation.
 */
extern "C" eIcicleError icicle_malloc(void** ptr, size_t size);

/**
 * @brief Asynchronously allocates memory on the specified device.
 *

 * @param ptr Pointer to the allocated memory.
 * @param size Size of the memory to allocate.
 * @param stream Stream to use for the asynchronous operation.
 * @return eIcicleError Status of the memory allocation.
 */
extern "C" eIcicleError icicle_malloc_async(void** ptr, size_t size, icicleStreamHandle stream);

/**
 * @brief Frees memory on the specified device.
 *
 * @param ptr Pointer to the memory to free.
 * @return eIcicleError Status of the memory deallocation.
 */
extern "C" eIcicleError icicle_free(void* ptr);

/**
 * @brief Asynchronously frees memory on the specified device.
 *
 * @param ptr Pointer to the memory to free.
 * @param stream Stream to use for the asynchronous operation.
 * @return eIcicleError Status of the memory deallocation.
 */
extern "C" eIcicleError icicle_free_async(void* ptr, icicleStreamHandle stream);

/**
 * @brief Gets the total and available memory on the specified device.
 *
 * @param total Total memory available on the device (output parameter).
 * @param free Available memory on the device (output parameter).
 * @return eIcicleError Status of the memory query.
 */
extern "C" eIcicleError icicle_get_available_memory(size_t& total /*OUT*/, size_t& free /*OUT*/);

// Data transfer

/**
 * @brief Copies data from the device to the host.
 *
 * @param dst Destination pointer on the host.
 * @param src Source pointer on the device.
 * @param size Size of the data to copy.
 * @return eIcicleError Status of the data copy.
 */
extern "C" eIcicleError icicle_copy_to_host(void* dst, const void* src, size_t size);

/**
 * @brief Asynchronously copies data from the device to the host.
 *
 * @param dst Destination pointer on the host.
 * @param src Source pointer on the device.
 * @param size Size of the data to copy.
 * @param stream Stream to use for the asynchronous operation.
 * @return eIcicleError Status of the data copy.
 */
extern "C" eIcicleError icicle_copy_to_host_async(void* dst, const void* src, size_t size, icicleStreamHandle stream);

/**
 * @brief Copies data from the host to the device.
 *
 * @param dst Destination pointer on the device.
 * @param src Source pointer on the host.
 * @param size Size of the data to copy.
 * @return eIcicleError Status of the data copy.
 */
extern "C" eIcicleError icicle_copy_to_device(void* dst, const void* src, size_t size);

/**
 * @brief Asynchronously copies data from the host to the device.
 *
 * @param dst Destination pointer on the device.
 * @param src Source pointer on the host.
 * @param size Size of the data to copy.
 * @param stream Stream to use for the asynchronous operation.
 * @return eIcicleError Status of the data copy.
 */
extern "C" eIcicleError icicle_copy_to_device_async(void* dst, const void* src, size_t size, icicleStreamHandle stream);

// Stream management

/**
 * @brief Creates a stream on the specified device.
 *

 * @param stream Pointer to the created stream.
 * @return eIcicleError Status of the stream creation.
 */
extern "C" eIcicleError icicle_create_stream(icicleStreamHandle* stream);

/**
 * @brief Destroys a stream on the specified device.
 *

 * @param stream The stream to destroy.
 * @return eIcicleError Status of the stream destruction.
 */
extern "C" eIcicleError icicle_destroy_stream(icicleStreamHandle stream);

// Synchronization

/**
 * @brief Synchronizes the specified stream.
 *
 * @param stream The stream to synchronize
 * @return eIcicleError Status of the synchronization.
 */
extern "C" eIcicleError icicle_stream_synchronize(icicleStreamHandle stream);

/**
 * @brief Synchronizes the current device.
 *
 * @return eIcicleError Status of the synchronization.
 */
extern "C" eIcicleError icicle_device_synchronize();

/**
 * @brief Retrieves the properties of the specified device.
 *
 * @param properties Structure to be filled with device properties.
 * @return eIcicleError Status of the properties query.
 */
extern "C" eIcicleError icicle_get_device_properties(DeviceProperties& properties);
