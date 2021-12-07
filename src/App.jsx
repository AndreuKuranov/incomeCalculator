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
import DownloadsList from './components/DownloadsList';

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
        <Routes>
          <Route
            path="/incomeCalculator"
            element={(
              <DownloadsList
                className="main__downloads"
              />
            )}
          />
          <Route path="/incomeCalculator/:invoiceId" element={<Body />} />
          <Route
            path="*"
            element={<Body />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
