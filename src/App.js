import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getCurrentDate() {
  return new Date().toLocaleDateString();
}

function Welcome(props) {
  return <div><h1>Hello, {props.name}!</h1><h2>{getCurrentDate()}</h2></div>;
}

class ReadPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentDidUnmount() {
    clearInterval(this.timeID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, Doug!</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

function update() {

}

const user = {
  firstName: "Doug",
  lastName: "Milvaney"
};

/*const header = (
  <div>
    <h1>Hello, {formatName(user)}!</h1>
    <h2>{getCurrentDate()}</h2>
  </div>
);*/
const header = <Welcome name="Doug" />;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {<ReadPreview />}
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
