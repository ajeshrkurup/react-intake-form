import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: [
        {title : "Test 1", id: 1},
        {title : "Test 2", id: 2}
      ]
    }
  }
  render() {
    const { articles } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <h1>React intake form</h1>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          { articles.map(el => <li key={el.id}>{el.title}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
