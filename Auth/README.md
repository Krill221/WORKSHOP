
Client: web_app_next (client side)
Authentication Server: web_app_next (server side)
Authorization Server: web_app_next (server side)
Authorization Server: google
Protected Resource: serv_grapql_nestjs


----
Resource Owner (User): is a end-user who have username and password (or other credentials) to access Protected Resource.

Third Party Application (Client): or OAuth 2.0 Client is the external application (can be mobile app or web app or any application) that will access Protected Resource if Resource Owner (User) gives the access. To know that, the Client will ask Authorization Server.

Protected Resource: or sometimes called as Resource Provider, is a server(s) where the data can only be accessed if user is authenticated AND has permission (authorized) to access that data.

----
Authorization Server: is a server to proof that this user is authorized or permitted to access the Protected Resource. 
ory/hydra as Authorization Server
Google authorization service

Authentication Server (Resource Server, Identity Provider): is a server to proof that this user has the right credentials to do the operation in the Protected Resource. It commonly a username and password.

