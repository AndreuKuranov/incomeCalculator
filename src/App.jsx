import React, { useState } from 'react';
import './style/App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Body from './components/Body';

function App() {
  const [downloadsIncomes, setDownloadsIncomes] = useState(0);
  const [downloadsExpenses, setDownloadsExpenses] = useState(0);
  const [toUpdate, setToUpdate] = useState(5);

  return (
    <div className="main">
      <Menu
        className="main__menu"
        setDownloadsIncomes={setDownloadsIncomes}
        setDownloadsExpenses={setDownloadsExpenses}
        toUpdate={toUpdate}
        setToUpdate={setToUpdate}
      />
      <Header
        className="main__header"
      />
      <Body
        downloadsIncomes={downloadsIncomes}
        downloadsExpenses={downloadsExpenses}
        setToUpdate={setToUpdate}
      />
    </div>
  );
}

export default App;
