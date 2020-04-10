import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

import Book from '../models/book';
import User from '../models/user';

// get all books
export async function getBooks(req: Request, res: Response): Promise<Response> {
  
  const books = await Book.find();

  return res.json(books);
}

// create book
export async function createBook(req: Request, res: Response): Promise<Response> {

  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  const user = await User.findById(req.user.id);
  console.log(user);

  const files = req.files as { [fieldname: string]: Express.Multer.File[] };

  const book = new Book({
    ...req.body,
    author: req.user.id,
    img: files.front[0].path,
    file: files.file[0].path,
  });

  try {
    await book.save();
    
    return res.json(book);
  } catch(err) {
    console.log(err);
    return res.status(500).json({ msg: 'there was an error' });
  }

}

