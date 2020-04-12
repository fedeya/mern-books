import React, { Fragment } from 'react';

import Header from '../layout/Header';
import BookList from './BookList';

function Books() {
  return (
    <Fragment>
      <Header />
      <BookList />
    </Fragment>
  )
}

export default Books;