import React from 'react';

import Book from './Book';

function BookList() {
  
  const books = [
    { _id: 1, title: 'Book 1', author: { name: 'Federico' } },
    { _id: 2, title: 'Book 2', author: { name: 'Agustin' } },
    { _id: 3, title: 'Book 3', author: { name: 'Jeremiaz' } }
  ]

  return (
    <div className="container mt-3 flex flex-wrap mx-auto">
      {
        books.map(book => (
          <Book book={book} />
        ))
      }
    </div>
  );
}

export default BookList;