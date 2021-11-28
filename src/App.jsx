import React from 'react';
import './style/App.css';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Menu from './components/Menu';
import Body from './pages/Body';

function App() {
  const idRouter = useSelector((state) => state.id.id);

  return (
    <div className="main">
      <Router>
        <Menu
          className="main__menu"
        />
        <Switch>
          <Route path={`/incomeCalculator/${idRouter}`}>
            <Body />
          </Route>
          <Route path="/incomeCalculator">
            <Body />
          </Route>
          <Redirect to="/incomeCalculator" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
