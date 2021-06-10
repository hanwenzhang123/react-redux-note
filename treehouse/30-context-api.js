//What is Context API
React provides a way to pass data to components without having to pass props manually at every single level, or reach for a state management library like Redux.

In the typical React data flow, components communicate with each other via props.
For example, a parent component can pass data from state down to child components through props.

<Main grandies={this.state.grandchildren}>    //you can pass it down
    <Parent>
      <Child>
        <GrandChild1 />
        <GrandChild2 />
        <GrandChild3 />
      </Child>
    </Parent>
</Main>

However, what if there are grandchild of the grandchild of the grandchild.

prop drilling
--the cascade of props that gets data to parts of the react component tree.


//How Context Works
Context is mainly used when certain data needs to be accessed by many components at different nesting levels.

Context API 3 steps
- createContext()
- Provide
- Consumer

1. React.createContext()
  - sets up a context and returns an object with a provider and a consumer, the two main components of the context API.
2. Provider
 - Used as high as possible in the component tree, it allows a consumer to subscribe to context changes. 
3. Consumer
 - Access the provider to get the data it needs, the consumer is what helps avoid prop drilling.
  
   
