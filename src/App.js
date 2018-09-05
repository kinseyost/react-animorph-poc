import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactMorph from "react-morph";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ReactMorph>
          {({ from, to, fadeIn, fadeOut, go }) => (
            <div>
              <a onClick={() => go(1)}>
                <h3 {...from("text")} style={{ display: "inline-block" }}>
                  See ya later, alligator...
        </h3>
                <p {...fadeOut()}>Click the text above ;)</p>
              </a>
              <div>
                <h3 {...to("text")} style={{ display: "inline-block" }}>
                  After awhile, crocodile!
        </h3>
                <div>
                  <div styles={ { background: 'red', padding: 20 } } onClick={() => go(0)} {...fadeIn()}>
                    Would you like to redo?
                  </div>
                </div>
              </div>
            </div>
          )}
        </ReactMorph>
      </div>
    );
  }
}

export default App;
