Which of the following best describes unidirectional data flow?
  React flows any data changes at the top down through the component tree updating each component.


Can two or more components access and share the same state?
  Yes. A parent component can pass state down to its children via props.


When two or more components need access to the same state, we hoist the state into their common parent. This is called:
lifting state


React allows us to use props that are callback functions to communicate data upstream, from a child to a parent.
True. That's how a child component can access functions and change state defined in its parent component.


Please fill in the correct answer in each blank provided below.
Complete the code to create a controlled component that renders an <input> field.

class ControlledInput extends Component {
  state = {
    value: ' '
  };
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  render() {
    return (
      <input 
        type="text" 
        value={ this.state.value }   
        onChange={ this.handleChange }
      />
    );
  }
}


Please fill in the correct answer in each blank provided below.
Complete the code to bring in all student objects in the previous state into the students array in setState().

class Students extends Component {
  state = {
    students: [ // array of student objects ]
  };
  this.setState( prevState => ({
    students: [
      ...prevState.students,
      { // new student object }
    ]
  }));
  render() { ... }
}
