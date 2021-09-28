Authentication
Adding Authentication to React Apps
- How Authentication Works in React Apps
- Implementing User Authentication
- Adduing Auth Persistence & Auto-Loggout

Authentication is needed if content should be protected (not accessible by everyone).

Authentication is a two-step process:
- Get access/permission
- Send request to the protected resource

//Getting Permission
Client (browser) - Request (with user credentials) - Server - Response (yes/no)
Is that enough? A yes alone is not enough to then access protected resources (API endpoints)

//How Does Autehntication Work?
We can not just save and use the "yes", we could send a fake "yes" to the server to request protected data
server-side sessions 
- (server grant your access, stores unique indentifier on server, send same identifier to the client)
- (client sends identifier along with requests to protected resources)
authentication tokens 
- send credentials to server, and the server validates credentials
- comparing the combination to what is stored in the database
- if that is valid, then the server creates a permission token
- create but not store "permission" token on server (server is stateless), send token to client
- client sends token along with requests to protected resources

When working with "Authentication Tokens", 
these tokens are typically created in the "JSON Web Token" Format (JWT).
 those "tokens" are really just long strings which are constructed by an algorithm that encodes data into a string 
 (with help of a private key, only known by the server).
  
