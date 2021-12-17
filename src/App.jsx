import React from 'react';
import './style/App.css';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Header from './components/Header';
import ModalError from './components/ModalError/ModalError';
import DeleteConfirmation from './components/DeleteConfirmation/DeleteConfirmation';
import AppRouter from './components/AppRouter';

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
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;
