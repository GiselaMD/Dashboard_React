import React, { Component } from 'react';
import './App.css';
import WidgetsBlock from './WidgetsBlock';
import PageViews from './PageViews';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
           Dashboard 4all :)
          </h1>
          <WidgetsBlock/>
          <PageViews/>
        </header>
      </div>
    );
  }
}

export default App;
