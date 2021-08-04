//Debugging React Apps
//Fixing & Fixing Errors
- understanding error messages
- debugging and analyzing react apps
- using the react DevTools

Errors which React catches or the React development process catches and froze at you.

Debuggers
//Working with Breakpoints - step by step
Chrom Developer Tool - Sources

  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      //updatedGoals.unshift({ text: enteredText, id: "goal1" });   
      //errors happens like when we click one goal but delete another goal
      //can not assign the same id to all goal, cannot be hard coded with string
      //can not encounter two children with the same key, key should be unique
      return updatedGoals;
    });
  };

//Using the React DevTools
