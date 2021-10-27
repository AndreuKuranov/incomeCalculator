import React from 'react';
import './style/App.css';
import MainCalc from './components/MainCalc';
import MainHeader from './components/MainHeader';
import MainPercent from './components/MainPercent';
import MainSum from './components/MainSum';

function App() {
  return (
    <div className='main'>
      <MainHeader
        className='main__header'
      />
      <MainCalc
        className='main__calc'
      />
      <MainSum
        className='main__sum'
      />
      <MainPercent
        className='main__percent'
      />
    </div>
  );
}

export default App;
