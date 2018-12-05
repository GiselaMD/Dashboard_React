import React, { Component } from 'react';
import './App.css';
import WidgetsBlock from './WidgetsBlock';
import PageViews from './PageViews';
import Chat from './Chat'

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
          <Chat/>
          <p className="copyright">
            Developed by Gisela Miranda Difini
          </p>
        </header>
      </div>
    );
  }
}

export default App;
