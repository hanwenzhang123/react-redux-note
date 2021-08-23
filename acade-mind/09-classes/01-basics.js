//Class-based Components: An alternative to functions
optional, react past way of building components
an alternative way of building components
- what & why
- working with class-based components
- error boundaries (require class-based components)

//What & Why
//Functional Components (default, most modern approach)
function Product(props) {   //usually using const with arrow function
  return <h2> product!</h2>
}
//components are regular javascript function which return renderable results (typically JSX)

//Class-based Components (was required in the past prior to react 16.8)
class Product extends Component {
  render(){   //reserved word
    return <h2> product!</h2>
  }
}
//components can also be defined as JS classes where a render() method defines the to-be-rendered output
 
Prior to React 16.8, you have to use class-based components to manage "state"
React 16.8 introduced react "hooks" for functional components
Class-based components can not use React Hooks!!!
   
