// The concept of composition (children props)

// Props for configuring these components for passing data int them
// Components are just these custom HTML elements where you combine JSX code and styling

// We build all these components to then build a user interface
// In App.js we are using Expenses in there we are using ExpenseItem in there we're using ExpenseDate.

// Generally, this approach of building a user interface from smaller building blocks is called composition.

// What if we wanted to create a component which actually just serves as a shell around any kind of other content?
// we create a Card component

//
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;

//Card.js
import './Card.css';

function Card(props) {
  const classes = 'card ' + props.className;
  
  return <div className={classes}>{props.children}</div>;
}

export default Card;
//children is the reserved name


//Card.css
.card {
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
}

  
