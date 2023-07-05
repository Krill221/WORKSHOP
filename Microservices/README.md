
## MICROSERVICES NESTJS
## install & run
nest new micro_serv
pnpm i --save @nestjs/microservices
## change main.ts
## change app.controller.ts

## for go
protoc --go_out=. --go_opt=paths=source_relative \
  --go-grpc_out=. --go-grpc_opt=paths=source_relative \
  *.proto
