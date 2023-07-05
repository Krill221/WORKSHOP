package app

import (
	context "context"
	"fmt"
)

// type Server struct {
// 	UnimplementedTutorialServer
// }

// func (s *Server) SayHello(ctx context.Context, in *HelloRequest) (*HelloReply, error) {
// 	return &HelloReply{Message: "Hello, " + in.GetName()}, nil
// }

type Server struct {
	UnimplementedAppControllerServer
}

func (s *Server) Accumulate(ctx context.Context, in *NumberArray) (*SumOfNumberArray, error) {
	sum := 0.0
	for _, v := range in.Data {
		sum += v
	}
	fmt.Println(sum)
	return &SumOfNumberArray{Sum: sum}, nil
}
