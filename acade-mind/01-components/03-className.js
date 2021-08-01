import "./ExpenseItem.css";

function ExpressItem() {
  return (
    <div className="expense-item">
      <div>March 28, 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$294.67</div>
      </div>
    </div>
  );
}

export default ExpressItem;

//you can only have one root element per return statement (JSX code)
//solution: wrap everything in another div and use () to signal JS that it is one statement

//add styling using className for class name attribute that used in CSS
