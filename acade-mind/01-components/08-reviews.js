Which kind of code do you write when using React.js?
Declarative JavaScript Code
With React.js, you define the "goal" (i.e. what should be shown on the screen) and let React figure out how to get there.

What is "JSX"?
A special, non-standard syntax which is enabled in React projects
React projects like the ones we create via "create-react-app" support JSX syntax. 
It gets compiled to standard JS code behind the scenes.

Why is React all about "Components"?
Every UI in the end up is made up of multiple building blocks (=components), hence it makes sense to think abouut UI as combination of components
"Components" are really just a way of thinking about user interfaces. 
React embraces that concept and gives you tools to build components that you can then combine.

What does "declarative" mean?
You define the desired outcome (target UI) and let the library (React) figure out the steps
You define the target "state" (UI) and React figures out which JS commands need to be executed to bring that result to life.

What is a "React Component"?
A JavaScript function which typically returns HTML(JSX) code that should be displayed
A component is just that: A JS function that typically returns some HTML 
(or, to be precise: JSX) code which will be shown on the screen when that component is used.

How many custom React components must a React app have?
That is totally up to you
You can have as many React components as you want / need.

With React, you build a component tree with one root component that is mounted into a DOM node.
You build a component tree that has one root node.

What does "component tree" mean?
It means that you have a root node which then has more components nested beneath it
You build a tree by nesting components into each other - just as you build a HTML tree when building a standard HTML document.

How do you pass data between components?
via "custom HTML attributes" (better known aas "props")
You build your own "HTML elements" in the end, hence you can also define your own attributes (called "props" in React's world)

How can you output dynamic data in React components (i.e. in the returned JSX code)?
You can use single curly braces (opening & closing) with any JS expression between them
You can not put block statements (e.g. if statements) between those curly braces 
but you can output any result of any JS expression by using this special feature.
  
