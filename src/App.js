import React from 'react';
import './App.css';
import Watch from './watch';
import Band from './band';

function App() {
  return (
    <div className="App">
      {/* <h1>hello</h1> */}
      <Band></Band>
      
      <Watch/>
      <Band></Band>
    </div>
  );
}

export default App;
