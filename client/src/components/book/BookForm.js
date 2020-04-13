import React, { useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import BookContext from '../../context/book/BookContext';

import Header from '../layout/Header';

function BookForm() {

  const fileRef = useRef();
  const frontFileRef = useRef();

  const { createBook } = useContext(BookContext);

  const [book, setBook] = useState({
    title: '',
    description: '',
    front: '',
    file: '',
    bookAuthor: '',
  });

  const [error, setError] = useState('');

  const history = useHistory();

  const handleChange = e => {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    const form = new FormData();

    const { title, description, front, file, bookAuthor } = book;

    if (title === '' || description === '' || front === '' || file === '' || front === '' || bookAuthor === '') {
      setError('ALL FIELDS IS REQUIRED');
      return;
    }

    form.append('file', fileRef.current.files[0]);
    form.append('front', frontFileRef.current.files[0]);
    form.append('title', title);
    form.append('description', description);
    form.append('bookAuthor', bookAuthor);
    setError('');
    createBook(form);
    history.push('/books');
  }

  return (
    <div className="flex-col h-screen w-screen bg-gray-800">
      <Header />
      <form
        className="bg-white flex mt-5 mx-auto flex-col h-auto rounded w-full md:w-3/4 lg:w-1/3 px-6 pt-6 pb-8"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl text-center mb-3">Create Book</h1>
        <input
          type="text"
          name="title"
          className="focus:bg-white w-full py-2 px-3 bg-gray-200 border-2 border-gray-200 focus:border-blue-400 rounded focus:outline-none mb-3"
          placeholder="Title"
          value={book.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="bookAuthor"
          className="focus:bg-white w-full py-2 px-3 bg-gray-200 border-2 border-gray-200 focus:border-blue-400 rounded focus:outline-none mb-3"
          placeholder="Author of the Book"
          value={book.bookAuthor}
          onChange={handleChange}
        />
        <div className="flex flex-row justify-center flex-grow-0">
          <label className="bg-gray-200 mr-3 py-2 px-3 mb-3 cursor-pointer text-gray-700">
            <span>
              {book.file !== '' ? book.file.split('\\')[book.file.split('\\').length - 1] : 'Select Book File'}
            </span>
            <input type="file" ref={fileRef} name="file" value={book.file} onChange={handleChange} className="hidden" />
          </label>
          <label className="bg-gray-200 py-2 px-3 mb-3 cursor-pointer text-gray-700">
            <span>
              {book.front !== '' ? book.front.split('\\')[book.front.split('\\').length - 1] : 'Select Book Image'}
            </span>
            <input type="file" ref={frontFileRef} name="front" value={book.front} onChange={handleChange} className="hidden" />
          </label>
        </div>
        <textarea
          name="description"
          className="focus:bg-white w-full py-2 px-3 bg-gray-200 border-2 border-gray-200 focus:border-blue-400 rounded focus:outline-none mb-3"
          placeholder="Description"
          value={book.description}
          onChange={handleChange}
        >

        </textarea>
        {error.length !== 0 && <p className="bg-red-500 font-bold px-2 py-3 width-full text-white rounded text-center mb-2">{error}</p>}
        <button
          className="bg-blue-500 border-b-4 border-blue-700 hover:bg-blue-400 w-20 font-bold rounded text-white px-3 py-2"
        >
          Create
          </button>

      </form>
    </div>
  );

}

export default BookForm;