//Quiz
1. What is Node.js?
- A javascript runtime that allows you to execute JS outside of a browser

2. What is Express.js?
- A framework for Node.js

3. What is a middleware in Express.js?
- A function that gets a request and may return a response (or edit request or response and move on to the next middleware)

4. How often do you run your server-side script with Node.js when you want to start a server and handle incoming requests?
- Once to start the server and register all middlewares
  
5. When are Express middleware functions getting executed?
- Whenever a request reaches that middleware function
  
6. app.use() 
- app.use() registers a middleware, it does NOT execute it right away.

7. bodyPardser
- A function which parses the request body and then returns a response with any content of your choice.


//What is node.js
- a host runtime environment for JavaScript
- allow you to run javascript outside of the browser
- add new api like filesystem but drops others like dom api

//app.js
const http = require('http');

const server = http.createServer((req, res) => {
  console.log('INCOMING REQUEST');
  console.log(req.method, req.url); //GET /

  if (req.method === 'POST') {      //POST request
    let body = '';      //username=Max
    req.on('end', () => {  //after sending the post request, the end action
      const userName = body.split('=')[1];
      res.end('<h1>' + userName + '</h1>');
    });

    req.on('data', (chunk) => {  //data we get from the response body
      body += chunk;
    });
  } else {     //GET request
    res.setHeader('Content-Type', 'text/html');    //header to set the data type
    res.end(
      '<form method="POST"><input type="text" name="username"><button type="submit">Create User</button></form>'
    );
  }
});

server.listen(5000); //server - localhost 5000

 
//What is express.js
- a framework for node.js
- makes building web apps (server) with node much easier
- middleware-focused approach

//app.js
const express = require('express');
const bodyParser = require('body-parser');   // gives us ready-to-use middlewares which we can use in Express apps to parse incoming request bodies.

const app = express();  //call the function

//app.use(bodyParser) => NO needs for the code below due to bodyParser
//app.use(<specific_middleware_layer_here>)
//by adding bodyParser, you ensure your server handles incoming requests through the express middleware. 

// app.use((req, res, next) => {
//   let body = '';
//   req.on('end', () => {
//     const userName = body.split('=')[1];
//     if (userName) {
//       req.body = { name: userName };
//     }
//     next();    //with next() middleware, you forward the request to the next next() middleware
//   });
//   req.on('data', chunk => {
//     body += chunk;
//   });
// });

// app.use((req, res, next) => {
//   if (req.body) {
//     return res.send('<h1>' + req.body.name + '</h1>');
//   }
//   res.send(
//     '<form method="POST"><input type="text" name="username"><button type="submit">Create User</button></form>'
//   );
// });

//bodyParser.json for JSON data
app.use(bodyParser.urlencoded({ extended: false }));  //will parse all incoming requests and try to extract any data which is in your body if it is of type urlencoded data

app.post('/user', (req, res, next) => {      //with path (exact match) that triggers for post request
  res.send('<h1>User: ' + req.body.username + '</h1>');
});

app.get('/', (req, res, next) => {     //with path (exact match) that triggers for get request
  res.send(
    '<form action="/user" method="POST"><input type="text" name="username"><button type="submit">Create User</button></form>'
  );
});

app.listen(5000); //set up the server run at localhost 5000

  
//Error Handling Middleware
app.use((error, req, res, next) => {  //express automatically knows error handling when there are 4 params
  if(res.headerSend){ //check if the response has already been sent
    return next(error)
  }
  res.status(error.code || 500);
  res.json({message: error.message || "An unknown error occurred"})
})
 
if(!place){
  const error = new Error("can not find a plance for the provided id")
  error.code = 404;
  throw error; //triggers the error handling middleware 
//   return next(error);  //next does not cancel next function, so we have to return it
}

//Own Error Model
class HttpError extends Error {
  constructor(message, errorCode) {
    super(message);
    this.code = errorCode;
  }
}

module.exports = HttpError;

