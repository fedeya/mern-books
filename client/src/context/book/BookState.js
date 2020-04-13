import React, { useReducer } from 'react';

import BookContext from './BookContext';
import BookReducer from './BookReducer';

import { GET_BOOKS } from '../../types';

import axiosClient from '../../config/axios';

function BookState({ children }) {
  const initialState = {
    books: [],
    book: null,
    error: null
  };

  const [state, dispatch] = useReducer(BookReducer, initialState);
  
  const getBooks = async () => {
    try {
      const res = await axiosClient.get('/books');

      dispatch({
        type: GET_BOOKS,
        payload: res.data
      });
    } catch(err) {
      console.log(err.response);
    }
  }

  const deleteBook = async id => {
    try {
      await axiosClient.delete(`/books/${id}`);
      const res = await axiosClient.get('/books');
      
      dispatch({
        type: GET_BOOKS,
        payload: res.data
      });
    } catch(err) {
      console.log(err.response);
    }
  }

  return (
    <BookContext.Provider
      value={{
        ...state,
        getBooks,
        deleteBook
      }}
    >
      {children}
    </BookContext.Provider>
  );
}

export default BookState;