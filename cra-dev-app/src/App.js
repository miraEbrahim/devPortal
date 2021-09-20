import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './App.scss';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

class App extends Component {
  state = {
      counter: 0
  };

  handleClick = () => {
      this.setState(prevState => {
          return { counter: prevState.counter + 1 };
      });
  };
  render() {
      return (
          <div className="App">
              <h1>I'm configuring setting up Webpack!!!</h1>
              <p>{`The count now is: ${this.state.counter}`}</p>
              <button onClick={this.handleClick}>Click me</button>
          </div>
      );
  }
}

export default hot(module)(App);
