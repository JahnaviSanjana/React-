import React from 'react';
import ReactDOM from 'react-dom';

// Define jsxHeading
var jsxHeading = (
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

const nestedheader = React.createElement('div', { className: 'title' }, [
  React.createElement('h1', {}, 'Heading 1 using react'),
  React.createElement('h2', {}, 'Heading 2 using react'),
  React.createElement('h3', {}, 'Heading 3 using react'),
]);

// Define NestedHeader
const NestedHeader = () => {
  return (
    <div className="title">
      {jsxHeading}
      <h1 style={{ color: 'blue', fontSize: '24px' }}>Heading 1</h1>
      <InsideComponent />
      <h2 style={{ color: 'red', fontSize: '20px' }}>Heading 2</h2>
      <h3 style={{ color: 'green', fontSize: '16px' }}>Heading 3</h3>
      <InsideComponent />
    </div>
  );
};



// Define InsideComponent
const InsideComponent = function () {
  return <h5 style={{ color: 'pink', fontSize: '12px' }}> Heading 5</h5>;
};

// Get the root element
var appelement = document.getElementById("app-container");

// Use ReactDOM.render for non-concurrent mode
ReactDOM.render(<NestedHeader />, appelement);
