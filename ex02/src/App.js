// src/App.js
import React, { Component } from "react";

class App extends Component {
  setMyStorage = () => {
    document.cookie = "Year=2021";
    localStorage.setItem("Paragon", "yes, but Arena first");
    sessionStorage.setItem("frontend", "React");
  };
  getMyStorage = () => {
    let myCookieData = document.cookie
      .split("; ")
      .find((row) => row.startsWith("Year="))
      .split("=")[1];
    let myLocalStorageData = localStorage.getItem("Paragon");
    let mySessionStorageData = sessionStorage.getItem("frontend");
    return [myCookieData, myLocalStorageData, mySessionStorageData];
  };

  render() {
    return (
      <div className="App">
        <button type="button" onClick={this.setMyStorage}>
          Button Set
        </button>
        <button type="button" onClick={this.getMyStorage}>
          Button Get
        </button>
      </div>
    );
  }
}

export default App;
