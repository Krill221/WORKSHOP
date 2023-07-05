package main

import (
	"log"
	"net"

	app "grpctutorial/app"

	"google.golang.org/grpc"
)

func main() {
	println("gRPC server tutorial in Go")

	listener, err := net.Listen("tcp", "[::1]:5000")
	if err != nil {
		panic(err)
	}

	s := grpc.NewServer()
	app.RegisterAppControllerServer(s, &app.Server{})
	if err := s.Serve(listener); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}