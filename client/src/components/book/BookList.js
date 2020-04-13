import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';

import BookContext from '../../context/book/BookContext';

import Book from './Book';

function BookList() {

  const { books, getBooks, loading } = useContext(BookContext);

  useEffect(() => {
    getBooks();
    // eslint-disable-next-line
  }, [])

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <ReactLoading type="spin" width="100" />
      </div>
    )
  }

  if(books.length === 0 && !loading) {
    return (
      <div className="text-center text-white text-2xl">
        <p>No there are books</p>
        <Link className="text-blue-300" to="/add">
          Create one
        </Link>
      </div>
    )
  }

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