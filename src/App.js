import React, { Component } from 'react';
import logo from './logo.svg';
import Media from './playlist/components/media'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <header className="App-header">
        </header>

        <div className="App-content">
        <Media title="¿Porqué aprender React?" author="Ezex" image="/images/covers/bitcoin.jpg"></Media>
          <Media  type="video"title="¿Porqué aprender React?" author="Ezex" image="/images/covers/bitcoin.jpg"></Media>
        </div>

        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
