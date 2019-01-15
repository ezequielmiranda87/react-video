import React, { Component } from 'react';
import logo from './logo.svg';
import Playlist from './playlist/components/playlist';
import data from './data/api.json'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      
        <header className="App-header">
        </header>

        <div className="App-content">
          <Playlist data= {data}/>
        </div>

        <footer>
º
        </footer>
      </div>
    );
  }
}

export default App;
