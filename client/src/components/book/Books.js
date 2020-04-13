import React from 'react';

import Header from '../layout/Header';
import BookList from './BookList';

function Books() {
  return (
    <div className="h-screen w-screen bg-gray-800">
      <Header />
      <BookList />
    </div>
  )
}

export default Books;