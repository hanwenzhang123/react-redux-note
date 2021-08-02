//Lifting The State Up

// This is component has access to both ivolved components
                  |<-               <App />                 <-|
//pass state data via props       /         \          //lifting the state up
                  |->  <Expenses />   -X-   <NewExpense />  ->|
//          Data/State is needed here    Data/State is generated here

                    
// Controled component - using 2-way biding 
It means that a value which is used in the component like the value selected in the dropdown
is passed on to a parent component, through props and is received from the parent component.

Controled component: both the value, as well as changes to the value are not handled in the component itself,
but in a parent component.

                    
// Stateful component vs Stateless Component
dumb/stateless - it doesn't have any internal state, it's just there to output some data.
stateful - distribute through props
   
