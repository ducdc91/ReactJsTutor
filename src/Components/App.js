import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Lession3 from './Lession3';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div>
          <h1>Lession 3</h1>
          <Lession3 hasvacancy={true} />
        </div>
      </div>
    );
  }
}

export default App;
