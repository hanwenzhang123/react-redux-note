class Counter extends React.Component {
  state = {
    score: 0
  };
//update the score state
  incrementScore() {    //this.setState() is a built-in one let react know the state has changed and update based on the value you put in
    this.setState({   //update the value and tell the react this component needs to be rerendered to update the UI
      score: this.state.score + 1
    })    // this keyword usually refers to the parent class which is Counter here
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">{ this.state.score }</span>
        <button className="counter-action increment" onClick={this.incrementScore.bind(this)}> + </button>
      </div>                           // have to use onClick because it is a react build-in event, and we want to increase the score only when the button is clicked
    );
  }
}
