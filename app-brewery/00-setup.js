//https://reactjs.org/docs/create-a-new-react-app.html

//https://create-react-app.dev/docs/getting-started/

//npm uninstall -g create-react-app

npx create-react-app my-app
cd my-app
npm start

Then open http://localhost:3000/ to see your app


//index.js
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hello World!</h1>,
  document.getElementById('root')
);


//index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="../src/index.js"></script>
  </body>
</html>




<!-- Load React. -->
<!-- Note: when deploying, replace "development.js" with "production.min.js". -->
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>

<!-- Load our React component. -->
<script src="../src/index.js"></script>
 
