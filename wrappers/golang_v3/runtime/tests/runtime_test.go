package test

import (
	"testing"

	"github.com/ingonyama-zk/icicle/v2/wrappers/golang_v3/runtime"
	"github.com/stretchr/testify/assert"
)

func TestIsDeviceAvailable(t *testing.T) {
	runtime.LoadBackendFromEnv()
	dev := runtime.CreateDevice("CUDA", 0)
	err := runtime.SetDevice(&dev)
	res, err := runtime.GetDeviceCount()
	assert.Equal(t, runtime.Success, err)
	assert.Equal(t, res, 2)
	err = runtime.LoadBackendFromEnv()
	assert.Equal(t, runtime.Success, err)
	devCuda := runtime.CreateDevice("CUDA", 0)
	assert.True(t, runtime.IsDeviceAvailable(&devCuda))
	devCpu := runtime.CreateDevice("CPU", 0)
	assert.True(t, runtime.IsDeviceAvailable(&devCpu))
	devInvalid := runtime.CreateDevice("invalid", 0)
	assert.False(t, runtime.IsDeviceAvailable(&devInvalid))
}

func TestRegisteredDevices(t *testing.T) {
	err := runtime.LoadBackendFromEnv()
	assert.Equal(t, runtime.Success, err)
	devices, err := runtime.GetRegisteredDevices()
	assert.Equal(t, []string{"CUDA", "CPU"}, devices)
}

func TestDeviceProperties(t *testing.T) {
	err := runtime.LoadBackendFromEnv()
	assert.Equal(t, runtime.Success, err)
	dev := runtime.CreateDevice("CUDA", 0)
	err = runtime.SetDevice(&dev)
	assert.Equal(t, runtime.Success, err)
	_, err = runtime.GetDeviceProperties()
	assert.Equal(t, runtime.Success, err)

}

func TestActiveDevice(t *testing.T) {
	err := runtime.LoadBackendFromEnv()
	assert.Equal(t, runtime.Success, err)
	dev1 := runtime.CreateDevice("CUDA", 0)
	err = runtime.SetDevice(&dev1)
	assert.Equal(t, runtime.Success, err)
	activeDevice, err := runtime.GetActiveDevice()
	assert.Equal(t, runtime.Success, err)
	assert.Equal(t, dev1, *activeDevice)
	memory1, err := runtime.GetAvailableMemory()
	assert.Equal(t, runtime.Success, err)
	assert.Greater(t, memory1.Total, uint(0))
	assert.Greater(t, memory1.Free, uint(0))
}

// func TestDestroyStream(t *testing.T) {
// 	stream, err := runtime.CreateStream()
// 	assert.Equal(t, runtime.Success, err, "Unable to create stream due to %d", err)

// 	err = runtime.DestroyStream(stream)
// 	assert.Equal(t, runtime.Success, err, "Unable to destroy stream due to %d", err)
// }

// func TestSyncStream(t *testing.T) {
// 	stream, err := runtime.CreateStream()
// 	assert.Equal(t, runtime.Success, err, "Unable to create stream due to %d", err)

// 	_, err = MallocAsync(200000, stream)
// 	assert.Equal(t, CudaSuccess, err, "Unable to allocate device memory due to %d", err)

// 	dp, err := Malloc(20)
// 	assert.NotNil(t, dp)
// 	assert.Equal(t, CudaSuccess, err, "Unable to allocate device memory due to %d", err)

// 	err = SynchronizeStream(&stream)
// 	assert.Equal(t, CudaSuccess, err, "Unable to sync stream due to %d", err)

// 	err = DestroyStream(&stream)
// 	assert.Equal(t, CudaSuccess, err, "Unable to destroy stream due to %d", err)
// }