//App.js
import ExpressItem from "./components/ExpenseItem"; //import

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpressItem></ExpressItem>   {/*using this JSX syntax, capital and camel*/} 
    </div>
  );
}

export default App;   //export to the root file

//ExpenseItem.js
function ExpressItem() {
  return (
    <div>
      <div>March 28, 2021</div>
      <div>
        <h2>Car Insurance</h2>
        <div>$294.67</div>
      </div>
    </div>
  );
}

export default ExpressItem; //export
 
