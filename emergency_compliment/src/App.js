import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Hello extends Component {
  render() {
    return (
      <div className="App">
        <p>Hello {this.props.name}</p>
      </div>
    );
  }
}

export default Hello;
