import React, { useState } from 'react';
import './style/App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Percent from './components/Percent';
import Sum from './components/Sum';
import Calc from './components/Calc';

function App() {
  const [downloadsIncomes, setDownloadsIncomes] = useState(0);
  const [downloadsExpenses, setDownloadsExpenses] = useState(0);

  const [sumIncomes, setSumIncomes] = useState(0);
  const [sumExpenses, setSumExpenses] = useState(0);
  const [percent, setPercent] = useState(0);

  return (
    <div className="main">
      <Menu
        className="main__menu"
        setDownloadsIncomes={setDownloadsIncomes}
        setDownloadsExpenses={setDownloadsExpenses}
        saveIncomes={sumIncomes}
        saveExpenses={sumExpenses}
      />
      <Header
        className="main__header"
      />
      <Calc
        className="main__calc"
        downloadsIncomes={downloadsIncomes}
        downloadsExpenses={downloadsExpenses}
        setSumIncomes={setSumIncomes}
        setSumExpenses={setSumExpenses}
      />
      <Sum
        className="main__sum"
        sumIncomes={sumIncomes}
        sumExpenses={sumExpenses}
        percent={percent}
      />
      <Percent
        className="main__percent"
        percent={percent}
        setPercent={setPercent}
      />
    </div>
  );
}

export default App;
