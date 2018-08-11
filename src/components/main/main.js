import React, { Component } from 'react';
import logo from '../../logo.svg';
import './main.css';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <header className="Main-header">
          <img src={logo} className="Main-logo" alt="logo" />
          <h1 className="Main-title">Welcome to React</h1>
        </header>
        <p className="Main-intro">
          To get started, edit <code>src/Main.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Main;
