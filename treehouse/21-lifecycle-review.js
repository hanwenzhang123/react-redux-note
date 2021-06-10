Which lifecycle method gets called by React as soon as a component is inserted into the DOM?
  componentDidMount()


Which lifecycle method do you use to fetch data from an API?
  componentDidMount()

  
Which lifecycle method is invoked just before a component instance is destroyed?
  componentWillUnmount()
  
  
Complete the code to add the method that will clear the interval ID once the component gets removed from the DOM.
 componentWillUnmount() {
  clearInterval(this.myIntervalID);
}


Complete the ternary expression to display the button text based on the value of the isLoggedIn state.
class Login extends Component {
  state = { isLoggedIn: false };
  ...
  render() {
    return (
      <button>
        { this.state.isLoggedIn ? 'Log out' : 'Log in' }
      </button>
    );
  }
}


In the render() method, where should you write any intermediary variables?
  Outside the return statement
 
 
