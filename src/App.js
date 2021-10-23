import React from 'react';
import './App.css';
import MainCalc from './components/MainCalc';
import MainHeader from './components/MainHeader';
import MainPercent from './components/MainPercent';
import MainSum from './components/MainSum';

function App() {
  return (
    <div className="main">
      <MainHeader/>
      <MainCalc/>
      <MainSum/>
      <MainPercent/>
    </div>
  );
}

export default App;
