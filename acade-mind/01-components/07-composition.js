// The concept of composition (children props)

// Components are these custom HTML elements where you combine JSX code and styling CSS

// We build all these components to then build a user interface
// In App.js we are using Expenses in there we are using ExpenseItem in there we're using ExpenseDate.
// The approach of building a user interface from smaller building blocks is called composition.

// What if we wanted to create a component which actually just serves as a shell around any kind of other content?
// you wanna have a component where you do not configure everything through props
// but where instead you are able to pass content between the opening and closing tags of that component.
// we create a Card component here as an example


//ExpenseItem.js
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
    <Card className='expense-item'>   {/*custom component*/}
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;


//Card.js - container look with rounded corners, drop shadows and elements like these
import './Card.css';

function Card(props) {
  const classes = 'card ' + props.className;  //card as the default class that always applied
                       //props.className - anything received as a class name from outside is added to that string
  return <div className={classes}>{props.children}</div>;
}

export default Card;
//children is the reserved name
//the value of children prop will always be the content between the opening and closing tags of your custom component.

//Whenever you combine components, you are using composition.
//We compose our ExpenseItem component by using card as a wrapper, by using some built-in HTML elements, and by then all the putting in the ExpenseDate.
    

//Card.css
.card {
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
}

   
