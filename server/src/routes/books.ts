import { Router } from 'express';
import { check } from 'express-validator';

import multer from '../lib/multer'; 
import { getBooks, createBook } from '../controllers/book.controller';
import auth from '../middlewares/auth';

const router = Router();

router.route('/')
  .get(auth, getBooks)
  .post(auth, multer.fields([{ name: 'file' }, { name: 'front' }]), [
    check('title', 'the title of book is required').not().isEmpty(),
    check('description', 'the description of book is required').not().isEmpty(),
    check('bookAuthor', 'the author of book is required').not().isEmpty()
  ], createBook)

router.route('/:id')
  .get()
  .post()
  .put()
  .delete()

export default router;