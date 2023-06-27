package bn254

import (
	"encoding/binary"
	"log"
	"time"
)

// Function to convert [8]uint32 to [4]uint64
func ConvertUint32ArrToUint64Arr(arr32 [8]uint32) [4]uint64 {
	var arr64 [4]uint64
	for i := 0; i < len(arr32); i += 2 {
		arr64[i/2] = (uint64(arr32[i]) << 32) | uint64(arr32[i+1])
	}
	return arr64
}

func ConvertUint64ArrToUint32Arr(arr64 [4]uint64) [8]uint32 {
	var arr32 [8]uint32
	for i, v := range arr64 {
		b := make([]byte, 8)
		binary.LittleEndian.PutUint64(b, v)

		arr32[i*2] = binary.LittleEndian.Uint32(b[0:4])
		arr32[i*2+1] = binary.LittleEndian.Uint32(b[4:8])
	}

	return arr32
}

func TimeTrack(start time.Time, name string) {
	elapsed := time.Since(start)
	log.Printf("%s took %s", name, elapsed)
}
