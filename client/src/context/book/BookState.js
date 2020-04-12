import React, { useReducer } from 'react';

import BookContext from './BookContext';
import BookReducer from './BookReducer';

function BookState({ children }) {
  const initialState = {
    books: []
  };

  const [state, dispatch] = useReducer(BookReducer, initialState);
  
  return (
    <BookContext.Provider
      value={
        ...state
      }
    >
      {children}
    </BookContext.Provider>
  );
}

export default BookState;