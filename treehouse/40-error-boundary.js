With componentDidCatch() comes a new concept of an error boundary.  
Error boundaries are wrapper components that use componentDidCatch() to capture errors anywhere in their child component tree and display a fallback UI.

//ErrorBoundary.js
import React, { Component } from 'react';

//import { sendError } from '../error-config';

export default class ErrorBoundary extends Component {

  state = {
    hasError: false
  };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    //sendError.captureException(error, { extra: info });   send to the error tracking services dashboard
  }

  render() {
    if (this.state.hasError) {
      return <h2>Oh no! Something went wrong.</h2>
    }
    return this.props.children;
  }
}
