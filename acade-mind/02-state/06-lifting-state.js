//Lifting The State Up

// This is component has access to both ivolved components
                  |<-               <App />                 <-|
//pass state data via props       /         \          //lifting the state up
                  |->  <Expenses />   -X-   <NewExpense />  ->|
//          Data/State is needed here    Data/State is generated here
