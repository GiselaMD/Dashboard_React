import React, { Component } from 'react';
import './App.css';
import WidgetsBlock from './WidgetsBlock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
           Dashboard 4all
          </h1>
          <WidgetsBlock/>
        </header>
      </div>
    );
  }
}

export default App;
