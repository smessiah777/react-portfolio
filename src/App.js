import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
