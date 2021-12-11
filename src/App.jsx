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
import ModalError from './components/ModalError';
import DeleteConfirmation from './components/DeleteConfirmation';

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
        <ModalError />
        <DeleteConfirmation />
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
