import { Router } from 'express';
import { check } from 'express-validator';

import multer from '../lib/multer'; 
import { getBooks, createBook, getBook, updateBook, deleteBook } from '../controllers/book.controller';

const router = Router();

// api/books
router.route('/')
  .get(getBooks)
  .post(multer.fields([{ name: 'file' }, { name: 'front' }]), [
    check('title', 'the title of book is required').not().isEmpty(),
    check('description', 'the description of book is required').not().isEmpty(),
    check('bookAuthor', 'the author of book is required').not().isEmpty()
  ], createBook)

// api/books/:id
router.route('/:id')
  .get([
    check('id', 'enter a valid mongodb id').isMongoId()
  ], getBook)
  .put(multer.fields([{ name: 'file' }, { name: 'front' }]), [
    check('id', 'enter a valid mongodb id').isMongoId(),
    check('title', 'the title of book is required').not().isEmpty(),
    check('description', 'the description of book is required').not().isEmpty(),
    check('bookAuthor', 'the author of book is required').not().isEmpty()
  ], updateBook)
  .delete([
    check('id', 'enter a valid mongodb id').isMongoId()
  ], deleteBook)

export default router;