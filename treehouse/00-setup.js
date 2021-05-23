//https://reactjs.org/docs/create-a-new-react-app.html

//https://create-react-app.dev/docs/getting-started/

//npm uninstall -g create-react-app

npx create-react-app my-app
cd my-app
npm start

Then open http://localhost:3000/ to see your app



//CDN Links - https://reactjs.org/docs/add-react-to-a-website.html#add-react-in-one-minute

//Both React and ReactDOM are available over a CDN.
//react library code on html:

<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
The versions above are only meant for development, and are not suitable for production. Minified and optimized production versions of React are available at:

<script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
To load a specific version of react and react-dom, replace 17 with the version number.


Why the crossorigin Attribute?
If you serve React from a CDN, we recommend to keep the crossorigin attribute set:
<script crossorigin src="..."></script>
We also recommend to verify that the CDN you are using sets the Access-Control-Allow-Origin: * HTTP heade. This enables a better error handling experience in React 16 and later.
  
  
