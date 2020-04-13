import React, { useReducer } from 'react';

import BookContext from './BookContext';
import BookReducer from './BookReducer';

import { GET_BOOKS, DELETE_BOOK, ADD_BOOK } from '../../types';

import axiosClient from '../../config/axios';

function BookState({ children }) {
  const initialState = {
    books: [],
    book: null,
    error: null,
    loading: true
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
      dispatch({
        type: DELETE_BOOK
      });
      getBooks();
    } catch(err) {
      console.log(err.response);
    }
  }

  const createBook = async book => {
    try {
      await axiosClient.post('/books', book);
      dispatch({
        type: ADD_BOOK
      })
      getBooks();
    } catch(err) {
      console.log(err.response);
    }
  }

  return (
    <BookContext.Provider
      value={{
        ...state,
        getBooks,
        deleteBook,
        createBook
      }}
    >
      {children}
    </BookContext.Provider>
  );
}

export default BookState;