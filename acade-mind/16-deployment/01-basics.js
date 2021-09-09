Deploying React App
From development to production
- Deployment steps and pitfalls
- server-side routing vs client-side routing

Deployment Steps
- Test code
- Optimize code
- Build app for production
- Upload production code to server
- Configure server

Optimization
- useMemo()

//Deployment
//Build the code for production
npm run build 
- build production output
- once you run npm run build, we have a build folder
- the content of the build folder holds all you need to deploy to the server at the end

//Getting Started with Deployment (uploading files)
A react SPA is a "Static Website"
- only HTML, CSS & JavaScript
- no server side involved
- a static site host is needed

//Using Firebase for deployment
sudo npm install -g firebase-tools    //sugo gives the right permission, -g install globally
follow the steps on set up firebase hoisting

//Exploring Routing Issues & Finishing Deployment
server-side routing vs client-side routing
serve - production-ready react code
client - user

//Different URLs trigger different actions and will lead to different responses.
user sends request to the server, then server sends back response with html css js react code
then react contains react router code that will bring the correct component onto the screen based on the part of the URL after evaluation
Actutally the URL which the user entered with the specific path entered by the user is also part of the requests already though.
So the request which reaches the server contains this path.
a server would then look for different files which it would return as a response for different URLs.

//Hosting Single Page Application - React
when hosting a Single Page Application, we wanna ignore the path, and always return the same response,
the same HTML file and the same JavaScript files no matter which path the user targeted.
React Router, which is part of that application, which will take another look at that URL and then render the correct content on the screen.
  
