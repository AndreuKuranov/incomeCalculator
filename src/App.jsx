import React from 'react';
import './style/App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Menu from './components/Menu';
import Header from './components/Header';
import Body from './pages/Body';
import Downloads from './components/Downloads';

function App() {
  return (
    <div className="main">
      <Router>
        <Menu
          className="main__menu"
        />
        <Header
          className="main__header"
        />
        <Downloads
          className="main__downloads"
        />
        <Routes>
          <Route path="/incomeCalculator/:idSave" element={<Body />} />
          <Route path="/incomeCalculator" element={<Body />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
