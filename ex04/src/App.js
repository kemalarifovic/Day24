// src/App.js
import React, { Component } from "react";

class App extends Component {
  setLocalStorage = () => {
    localStorage.setItem("Arena", "Selection Month");
  };
  getLocalStorage = () => {
    let myLocalStorageData = localStorage.getItem("Arena");
    return myLocalStorageData;
  };
  render() {
    return (
      <div className="App">
        <button type="button" onClick={this.setLocalStorage}>
          Button Set
        </button>
        <button type="button" onClick={this.getLocalStorage}>
          Button Get
        </button>
      </div>
    );
  }
}

export default App;
