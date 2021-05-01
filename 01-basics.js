//React.createElement()
React requires 3 element
1. type element
2. object element
3. content/child element

const title = React.createElement(  // requires 3 elements
    'h1',       //1 - type element
    { id: 'main-title', title: 'This is a title.' },    // 2 - object element: containing any attribute and value you want to give the object
                                                 // if you don't want to pass any attribute or value, the object element can be {} or null
    'My first react element!'          //3 - content or the chilren element you are creating
 )   
 // <h1 id='main-title' title='this is a title>My first react element!<h1>



const des = React.createElement(
    'p',
    null,
    'I just learned how to create a React node and render it into the DOM.'
)
const header = React.createElememt(
    'header',
    null,
    title,
    desc
);

//ReactDOM.render()
//The 'react-dom' library provides DOM-specific methods. The one you'll use the most is ReactDOM.render(), which renders React elements to the DOM.

// render the react element to the DOM
//  accept 2 arguments
//  react/js element describe the element you want to render element
//  actually element you want to update or where render to

 ReactDOM.render(    //this is what create and update the DOM, and it manages the root element
    header,     //the header element
    document.getElementById('root')     //DOM element with DI root, container element
 ); //the code will be rendered to <div id='root'></div> in html
//it is render's job to interprete the element object and create DOM out of them 




  //Questions
Which of the following best describes React?
  A javascript library for building user interfaces

Which library lets React connect to and update the DOM?
  React DOM

Which method creates and returns a React element of the given type?
  createElement()
  
Which method renders React elements to the DOM?
  ReactDOM.render()

React only manages what gets rendered to t he DOM via ReactDOM.render. 
It is the job of render() to interpret the element objects and create DOM nodes out of them.
React do not manipulates and updates the DOM directly.
React creates objects that describes DOM nodes.


    
