import React, { useContext, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import ReactLoading from 'react-loading';

import AuthContext from '../../context/auth/AuthContext';

function PrivateRoute({component: Component, ...props}) {
  
  const { loading, auth, userAuth } = useContext(AuthContext);
  
  useEffect(() => {
    userAuth();
    // eslint-disable-next-line
  }, []);

  if(!auth && loading) return (
    <div className="h-screen w-screen bg-gray-800 flex items-center justify-center">
      <ReactLoading width="100px" type="spin" />
    </div>
  )

  return auth ? <Route component={Component} {...props} /> : <Redirect to="/" />
}

export default PrivateRoute;