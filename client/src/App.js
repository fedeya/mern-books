import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// views
import Login from './components/auth/Login';
import Registry from './components/auth/Registry';

function App() {
  return (
    <Router>
      <Switch>
        <Route component={Login} path="/" exact /> 
        <Route component={Registry} path="/register" />
      </Switch>
    </Router>
  );
}

export default App;
