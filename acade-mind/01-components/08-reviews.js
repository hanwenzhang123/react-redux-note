Which kind of code do you write when using React.js?
Declarative JavaScript Code
With React.js, you define the "goal" (i.e. what should be shown on the screen) and let React figure out how to get there.

What is "JSX"?
React projects like the ones we create via "create-react-app" support JSX syntax. 
It gets compiled to standard JS code behind the scenes.

Why is React all about "Components"?
"Components" are really just a way of thinking about user interfaces. 
React embraces that concept and gives you tools to build components that you can then combine.

What does "declarative" mean?
You define the target "state" (UI) and React figures out which JS commands need to be executed to bring that result to life.

What is a "React Component"?
A component is just that: A JS function that typically returns some HTML 
(or, to be precise: JSX) code which will be shown on the screen when that component is used.

How many custom React components must a React app have?
You can have as many React components as you want / need.

You build a component tree that has one root node.

What does "component tree" mean?
You build a tree by nesting components into each other - just as you build a HTML tree when building a standard HTML document.

How do you pass data between components?
You build your own "HTML elements" in the end, hence you can also define your own attributes (called "props" in React's world)

How can you output dynamic data in React components (i.e. in the returned JSX code)?
You can use single curly braces (opening & closing) with any JS expression between them
You can not put block statements (e.g. if statements) between those curly braces 
but you can output any result of any JS expression by using this special feature.
 
