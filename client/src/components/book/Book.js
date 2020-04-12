import React from 'react';

function Book({ book }) {
  return (
    <div className="bg-white w-48 px-3 py-2 shadow mr-3 flex-shrink-0">
      <p>{book.title}</p>
    </div>
  );
}

export default Book;