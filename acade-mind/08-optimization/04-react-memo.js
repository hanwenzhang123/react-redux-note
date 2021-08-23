Preventing unnecesarry re-evaluations with React.memo()
Only for functional component, not for class based components

//React.memo()
React should look at the props this component gets
and check the new value for all those props
and compare it to the previous value those props got.

And only if the value of a prop changed,
the component should be re-executed and re-evaluated.

And if the parent component changed
but the prop values for that component here did not change,
component execution will be skipped.

//Example
import React from "react";

const DemoOutput = (props) => {
  return <p>{props.show ? "this is new!" : ""}</p>;
};

export default React.memo(DemoOutput);

//props.show === props.previous.show
look at the previous value for the show prop and compares it to the current value,
and it does so with a regular comparison operator.

for primitive values, that will work because for primitive values, 
  if I compare two booleans
  false === false   //true
  "hi" === "hi"     //true
 
