import React from 'react';
import './style/App.css';
import Calc from './components/Calc';
import Header from './components/Header';
import Percent from './components/Percent';
import Sum from './components/Sum';
import Menu from './components/Menu';

function App() {
  return (
    <div className="main">
      <Menu
        className="main__menu"
      />
      <Header
        className="main__header"
      />
      <Calc
        className="main__calc"
      />
      <Sum
        className="main__sum"
      />
      <Percent
        className="main__percent"
      />
    </div>
  );
}

export default App;
