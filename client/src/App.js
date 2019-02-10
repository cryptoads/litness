import React, { Component } from 'react';

import './App.css';
import Tweet from './Components/Tweet.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="head">🔥 #LIT 🔥 </h1>

          <Tweet />
          
        </header>
      </div>
    );
  }
}

export default App;
