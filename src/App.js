import React, { Component } from 'react';
import IdeasContainer from './components/IdeasContainer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Straight Posted</h1>
        </header>

        <IdeasContainer />
      </div>
    );
  }
}

export default App;
