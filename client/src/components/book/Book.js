import React, { useState, Fragment, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import AuthContext from '../../context/auth/AuthContext';
import BookContext from '../../context/book/BookContext';

function Book({ book }) {

  const { user } = useContext(AuthContext);
  const { deleteBook, activeBook } = useContext(BookContext);
  const [open, setOpen] = useState(false);

  const history = useHistory();

  const editBook = () => {
    activeBook(book);
    history.push('/edit');
  }

  return (
    <Fragment>
      <div
        className="bg-gray-700 w-48 cursor-pointer items-center justify-between flex flex-col px-3 py-2 shadow mr-3 flex-shrink-0"
        onClick={() => setOpen(!open)}
      >
        <img
          src={`http://localhost:4000/${book.img}`}
          alt={book.title}
          className="rounded"
        />
        <div className="flex flex-col">
          <p className="text-2xl text-white">{book.title}</p>
          <p className="text-center text-gray-500">{book.bookAuthor}</p>
        </div>
        <div className="flex items-end h-full">
          <img
            src={`http://localhost:4000/${book.author.avatar}`}
            alt={book.author.name}
            className="w-5 h-5 inline"
          />
          <p className="text-gray-500 inline ml-2">{book.author.name}</p>
        </div>
      </div>
      {
        open && (
          <div className="bg-gray-800 mt-2 h-auto mr-3 flex-col justify-center flex w-auto px-2 py-2">
            <a 
              href={`http://localhost:4000/${book.file}`}
              target="__blank"
              className="bg-green-500 px-4 py-2 rounded shadow text-white font-bold mb-2">Download</a>
            {
              user._id === book.author._id && (
                <Fragment>
                  <button 
                    className="bg-red-500 px-4 py-2 rounded shadow text-white font-bold mb-2"
                    onClick={() => deleteBook(book._id)}
                  >
                    Delete
                  </button>
                  <button 
                    className="bg-yellow-500 px-4 py-2 rounded shadow text-white font-bold mb-2"
                    onClick={editBook}
                  >
                    Edit
                  </button>
                </Fragment>
              )
            }
          </div>
        )
      }
    </Fragment>
  );
}

export default Book;