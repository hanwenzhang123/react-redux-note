Client(Browser) - React - Presentation/UI
   Requests  || Responses
   (Data => JSON Format)
Server - Node/Express - Business Logic, File Storage
   Database Queries ||  Credentials would not be exposed in client-side code: huge security issue
Database Server - MongoDB - Persistent Data Storage


The Frontend (client) 
- React SPA
  - Routes (with react-router-dom) - Route Config + Page Components
  - State Management (Hooks, Redux) - Redux Logic, React Hooks, Custom Hooks
  - Components + Styling (CSS) - Utility/UI Components - Styles + some componnets will be provided
  
The Backend (Server)
- Decoupled Ends
- Backend built by API (expose entry points - control over actions)
  
REST API & GraphQL API  
   - execute code on the server (not yet talk to database), talk to your Node Express app and that Node Express app will then do something 
      based on the action which is triggered because of your path verb combination or because of your query command,
         then it is your Node Express server which will talk to a database.
   - can do anything on the server, like store data in a database, validate user input, get data from a database and so on. 
REST API
- Different URLs + HTTP verbs (= endpoints) for different actions
GraphQL API 
- One URL + HTTP verb (= one endpoint) that accepts query commands

REST & HTTP methods(http verbs)
GET - get a source from the server
POST - post a resource to the server (create or append resource)
PUT - put a resource onto the server (create or overwrite a resource)
PATCH - update parts of an existing resource on the server
DELETE - delete a resource on the sever

Two ways of connecting Node + React
1. Server Hosts Node API + React SPA
- Node (Express) API handles incoming requests
- Requests not targeting API routes, return React SPA
- Data is exchanged between React App and Node API in JSON format
2. Two Separated Servers
- Node (Express) API handles incoming requests
- React SPA served from separated static host
- Data is exchanged between React App and Node API in JSON format
  
  
//What is node.js
- a host runtime environment for JavaScript
- allow you to run javascript outside of the browser
- add new api like filesystem but drops others like dom api

//app.js
const http = require('http');

const server = http.createServer((req, res) => {
  console.log('INCOMING REQUEST');
  console.log(req.method, req.url);

  if (req.method === 'POST') {
    let body = '';
    req.on('end', () => {
      const userName = body.split('=')[1];
      res.end('<h1>' + userName + '</h1>');
    });

    req.on('data', (chunk) => {
      body += chunk;
    });
  } else {
    res.setHeader('Content-Type', 'text/html');
    res.end(
      '<form method="POST"><input type="text" name="username"><button type="submit">Create User</button></form>'
    );
  }
});

server.listen(5000);

 
//What is express.js
- a framework for node.js
- makes building web apps (server) with node much easier
- middleware-focused approach

//app.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/user', (req, res, next) => {
  res.send('<h1>User: ' + req.body.username + '</h1>');
});

app.get('/', (req, res, next) => {
  res.send(
    '<form action="/user" method="POST"><input type="text" name="username"><button type="submit">Create User</button></form>'
  );
});

app.listen(5000);



