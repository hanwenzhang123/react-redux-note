//App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';  //import the component we want to test

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

//npm test
//run in the terminal
//press a to run all tests (the ones ends with .test.js)


//test('name your tests', () => {} );
using test('') is globally available, no needs to import anything

//describe('name your test suits', () => { test() } );
test suites, globally available function, take 2 arguments
1st argument - description, group into categories that the test belongs
2nd argument - anonymous function, add your test() in
as your application grow, group your tests

//Writing tests - The Three "A"s
Arrange -> set up the test data, test conditions and test environment
Act -> run logic that should be tested (eg execute function)
Assert -> compare execution results with expected results

//Greeting.test.js
import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';  //import the component we want to test

describe('Greeting component', () => {
  test('renders Hello World as a text', () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText('Hello World!'); //getByText('Hello World!', {exact: false}); => case won't matter
    expect(helloWorldElement).toBeInTheDocument();  //queryByText() above then .not.toBeInTheDocument() here => test the test not in
  });
});
  
