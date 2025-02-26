package main

import (
	"fmt"
	"os"
)

func main() {
	if len(os.Args) != 2 {
		return
	}
	arg := os.Args[1]
	acc, err := NewAccountFromCommitteePublicKey(arg)
	if err != nil {
		fmt.Println(arg)
		return
	}
	fmt.Println(acc.MiningPubkey)
}
