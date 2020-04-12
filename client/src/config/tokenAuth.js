import axiosClient from './axios';

function tokenAuth(token) {
  if(token) {
    axiosClient.defaults.headers['Authorization'] = token;
  } else {
    delete axiosClient.defaults.headers['Authorization'];
  }
}

export default tokenAuth;