import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

// views
import Login from './components/auth/Login';
import Registry from './components/auth/Registry';
import Books from './components/book/Books';
import Profile from './components/user/Profile';

// context
import AuthState from './context/auth/AuthState';
import BookState from './context/book/BookState';
// routes
import PrivateRoute from './components/routes/PrivateRoute';
import PublicRedirect from './components/routes/PublicRedirect';

// add token to headers
import tokenAuth from './config/tokenAuth';

const token = localStorage.getItem('token');
if (token) tokenAuth(token);

function App() {
  return (
    <AuthState>
      <BookState>
        <Router>
          <Switch>
            <PublicRedirect component={Login} path="/" exact />
            <PublicRedirect component={Registry} path="/register" />
            <PrivateRoute component={Books} path="/books" />
            <PrivateRoute component={Profile} path="/profile" />
          </Switch>
        </Router>
      </BookState>
    </AuthState>
  );
}

export default App;
