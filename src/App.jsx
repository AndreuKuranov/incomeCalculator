import React from 'react';
import './style/App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Body from './components/Body';

function App() {
  return (
    <div className="main">
      <Menu
        className="main__menu"
      />
      <Header
        className="main__header"
      />
      <Body />
    </div>
  );
}

export default App;
