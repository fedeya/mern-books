import React, { useReducer } from 'react';

import axiosClient from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';

import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';

import { LOGIN_AUTH, LOGIN_ERROR, GET_USER } from '../../types';

function AuthState({ children }) {
  const initialState = {
    token: localStorage.getItem('token'),
    auth: false,
    user: null,
    error: null,
    loading: true
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const userAuth = async () =>  {
    const token = localStorage.getItem('token');
    if(token) {
      tokenAuth(token);
    }

    try {
      const res = await axiosClient.get('/auth');
      dispatch({
        type: GET_USER,
        payload: res.data
      })
    } catch(err) {
      dispatch({
        type: LOGIN_ERROR,
        paylaod: err.response.data.errors ? err.response.data.errors[0].msg : err.response.data.msg
      });
    }
  }
  
  const loginAuth = async user => {
    try {
      const res = await axiosClient.post('/auth', user);

      dispatch({
        type: LOGIN_AUTH,
        payload: res.data
      })

      userAuth();
    } catch(err) {
      dispatch({
        type: LOGIN_ERROR,
        payload: err.response.data.errors ? err.response.data.errors[0].msg : err.response.data.msg
      });
    }
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        loginAuth,
        userAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthState;