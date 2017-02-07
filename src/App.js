import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getCurrentDate() {
  return new Date().toLocaleDateString();
}

const user = {
  firstName: "Doug",
  lastName: "Milvaney"
};

const header = (
  <div>
    <h1>Hello, {formatName(user)}!</h1>
    <h2>{getCurrentDate()}</h2>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {header}
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
