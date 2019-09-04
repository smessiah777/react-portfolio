import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={MainPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
