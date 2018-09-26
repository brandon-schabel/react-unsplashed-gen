import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Button extends Component {
  render() {
    return (
      <button onClick={()=> window.open("https://source.unsplash.com/3840x2160/?nature", "_blank")} className="App">
      </button>
    );
  }
}

export default Button;
