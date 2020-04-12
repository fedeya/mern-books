import React, { useContext, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';

import AuthContext from '../../context/auth/AuthContext';

function PublicRedirect({component: Component, ...props}) {
  
  const { loading, auth, userAuth } = useContext(AuthContext);
  
  useEffect(() => {
    userAuth();
    // eslint-disable-next-line
  }, []);

  if(!auth && loading) return <p>Loading...</p>

  return !auth ? <Route component={Component} {...props} /> : <Redirect to="/books" />
}

export default PublicRedirect;