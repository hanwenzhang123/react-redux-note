https://react-bootstrap.github.io/

npm install react-bootstrap bootstrap@4.6.0


import Button from 'react-bootstrap/Button';

// or less ideally
import { Button } from 'react-bootstrap';

//App.js
import React, { Component } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';   //here
import SearchForm from './components/SearchForm';
import Results from './components/Results';

class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Container>
            <h1>Search App</h1>
            <p>This is a simple search app</p>

            <SearchForm />
          </Container>
        </Jumbotron>
        <Results />
      </div>
    );
  }
}

export default App;


//SearchForm.js
import React from 'react';
import {
  Form,
  FormGroup,
  FormControl,
  Button
} from 'react-bootstrap';

const SearchForm = () => (
  <Form inline>
    <FormGroup controlId="formInlineEmail">
      <FormControl type="search" placeholder="enter something..." />
    </FormGroup>
    {' '}
    <Button type="submit">
      search
    </Button>
  </Form>  
);

export default SearchForm;


//Results.js
import React from 'react';
import {
  Container,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';

const Results = () => (
  <Container>
    <h2>Results List</h2>
    <ListGroup>
      <ListGroupItem href="#" active>Link 1</ListGroupItem>
      <ListGroupItem href="#">Link 2</ListGroupItem>
      <ListGroupItem href="#" disabled>Link 3</ListGroupItem>
    </ListGroup>
  </Container>
);

export default Results;


//testing
npm test      //works similar like npm start
  
