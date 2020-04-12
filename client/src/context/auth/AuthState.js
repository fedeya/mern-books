import React, { useReducer } from 'react';

import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';

function AuthState({ children }) {
  const initialState = {
    auth: false,
    user: null
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);
  
  return (
    <AuthContext.Provider
      value={
        ...state
      }
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthState;