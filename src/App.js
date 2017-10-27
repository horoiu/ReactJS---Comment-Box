import React, { Component } from 'react';
import './App.css';
import DetailBoxComponent from './appComponents/DetailBoxComponent';

// MAIN application Wrapper

class App extends Component {
  render() {
    return (
      <div className="App">
        <DetailBoxComponent />
      </div>
    );
  }
}

export default App;
