import React from 'react';
import ReactDOM from 'react-dom';

var mainApp = (
    <div>
      <h1 id="mainHeading">Hello from React!</h1>
      <p>This is a functional component named MainApp.</p>
      <ul>
        <li>React</li>
        <li>JSX</li>
        <li>ReactDOM</li>
      </ul>
      <a href="https://reactjs.org">Visit React Official Website!</a>
      <br />
      <br />
      <button>Click me</button>
    </div>
  );


var appelement = document.getElementById("app-container");
var appReact = ReactDOM.createRoot(appelement);
appReact.render(mainApp);
