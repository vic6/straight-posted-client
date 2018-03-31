import React, { Component } from 'react';
import NotesContainer from './components/NotesContainer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Straight Posted</h1>
        </header>
        <NotesContainer />
        <p className="App-intro">
          To paper I rule, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
