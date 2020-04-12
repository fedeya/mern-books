import { GET_USER, LOGIN_AUTH, LOGIN_ERROR } from '../../types';

export default (state, action) => {
  switch(action.type) {
    case LOGIN_AUTH:
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        token: action.payload,
        auth: true
      }
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        auth: true,
        loading: false
      }
    case LOGIN_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        error: action.payload,
        auth: null,
        user: null,
        token: null,
        loading: false
      }
    default:
      return state;
  }
}