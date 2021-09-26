Testing React Apps - Automated Testing
- What is testing? and why?
- understanding unit tests
- testing react components & building blocks

//What & Why?
What is Testing?
- manual testing 
  (we write code <> Preview & Test in Browser)
  very important: you see what your users will see
  ERROR-Prone: it is hard to test all possible combinations and scenarios
            If you have a very complex React app with a lot of different pages and features, 
            and you then add a new feature, or you change an aspect of an existing feature,
            you will probably test that change or that new feature,
            but you are not going to test all the other parts of your application all the time.
  
- automated testing
  You write extra code that tests your code
     you can always test everything no matter what you changed because you will automatically then test your entire application
  You test the individual building blocks of your app
  Very technical but allows you to test ALL building blocks at once

//Understanding Different Kinds of Tests
Different kinds of automated tests
- unit tests
  test the individual building blocks (functions, components) in isolation
  projects typically contain dozens or hundreds of unit tests
  - The most common / important kind of test
- integration tests
  test the combination of multiple building blocks
  projects typically contain a couple of integration tests
  - Also important, but focus on unit tests in most cases
- end-to-end(e2e) tests
  test complete scenarios in your app as the user would experience them
  projects typically contain only a few e2e tests
  - Important but can also be done manually (partially)

//What to Test & How to Test
- what
  test the different building blocks
  unit tests: the smallest building blocks that make up your app
- how
  test success and error cases, also test rare (but possible) results

//Understanding the Technical Setup & Involved Tools
required tools & setup
- we need a tool for running our test and asserting the results 
  - jest
- we need a tool for "simulating" (rendering) our react app/components
  - react testing library
both tools are already set up for you when using create-react app
  
//Jest - JS Testing Documentation
https://jestjs.io/docs/getting-started

//React Testing Library - React Testing Documentation
https://testing-library.com/docs/react-testing-library/intro/

//React Hooks Testing Library
https://github.com/testing-library/react-hooks-testing-library
 
