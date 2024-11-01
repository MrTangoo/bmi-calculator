import React from 'react';
import './App.css';
import BmiCalculator from './components/BmiCalculator/BmiCalculator';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
  
        <BmiCalculator />
    </div>
  );
}

export default App;
