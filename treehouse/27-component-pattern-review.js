Which keyword lets you call propTypes from inside a class?
  static

Which of the following can produce a performance boost in some cases?
  PureComponent



Complete the code to provide the Greeter component a default value for the greeting prop.

Greeter.defaultProps = {
  greeting: 'To infinity…and beyond!'
};



Complete the code to create a ref that will access the <input> element.

class SignupForm extends Component {  
  userInput = React.createRef();
  render() {
    return (
      <input 
        type="text" 
        placeholder="Enter your info"
        ref={ this.userInput }
      />
    );
  }
}



Write the property that will allow type checking on the props passed to the Book component.

const Book = (props) => {
  return ( ... );
}

Book.propTypes = {
 ...
};
  
  
  
  
Destructure the props passed to Book and display their values in the JSX.

const Shelf = () => {
  return <Book title="TL;DR" author="Jay McQuery" year={2013} />;
}
// Book component
const Book = ({ title, author, year }) => {
  return (
    <div>
      <h1>Title: { title }</h1>
      <p>Author: {  author }</p>
      <p>Published: { year }</p>
    </div>
  );
}



