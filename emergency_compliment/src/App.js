import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Goodbye extends Component {
  render() {
    return (
      <div className="App">
        <p>Goodbye {this.props.name}</p>
      </div>
    );
  }
}

export default Goodbye;
