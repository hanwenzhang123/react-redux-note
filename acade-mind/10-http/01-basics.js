//Sending HTTP requests (connecting to a database)
- how do react apps interact with database?
- sending HTTP requests and using responses
- handling errors and loading state

//How to (not) connect to a database
browser-side apps do not directly talk to databases
React App -X- Database (SQL, NoSQL) - Backend App (NodeJS App, PHP App)
Database credential would be exposed in the broswer performance issues

React is able to talk to a backend but not to a database directly for a security and performance reasons.

//Backend API 
//API - Application Programming Interface - rules to do certain tasks
use the fetch API or a third-party libraries to perform the request
get the response, analyze the response and maybe throw and generate an error if it's needed
or work with the data you get back as part of the response.
You can send both get and post requests
you can handle different States which are involved with sending requests.
A loading and an error State
 
