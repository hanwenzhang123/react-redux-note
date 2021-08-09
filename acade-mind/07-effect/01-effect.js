Advanced: handling side effects, using reducers, using context API
- working with (side) effects
- managing more complex state with reducers
- managing App-Wide or Component Wide state with context

What is an "Effect" or a "Side Effect"?
Main Job: render UI & React to User Input
- evaluate and render JSX
- manage state & props
- react to user events & input
- re-evaluate component upon state and prop changes
this all is "backed into" react via the "tools" and features covered (i.e. useState() Hook, Props etc)

Side Effects: Anything Else
- store data in browser storage
- send HTTP requests to backend servers
- set & manage timers
...
these tasts must happen outside of the normal component evaluation and render cycle 
  - especially since they might block/delay rendering (e.g. HTTP requests)

Handling side effects with the useEffect() Hook
useEffect(() => {...}, [dependencies]);
() => {...} - a function that should be executed AFTER every component evaluation IF the specified dependecies changed
       - your side effect code goes into this function
[dependencies] - dependencies of this effect - the function only runs if the dependencies changed
       - specify your dependencies of your function here

  
