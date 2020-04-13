import React, { useContext, useEffect } from 'react';

import BookContext from '../../context/book/BookContext';

import Book from './Book';

function BookList() {
  
  const { books, getBooks } = useContext(BookContext);

  useEffect(() => {
    getBooks();
    // eslint-disable-next-line
  }, [])

  return (
    <div className="container mt-3 flex flex-wrap mx-auto">
      {
        books.map(book => (
          <Book book={book} key={book._id} />
        ))
      }
    </div>
  );
}

export default BookList;