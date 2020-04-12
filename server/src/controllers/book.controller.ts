import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import fs from 'fs-extra';

import Book, { IBook } from '../models/book';
import User from '../models/user';

// get all books
export async function getBooks(req: Request, res: Response): Promise<Response> {
  
  const books = await Book.find();
  await User.populate(books, { path: 'author', select: ['name', '_id', 'avatar'] });

  return res.json(books);
}

// get one book 
export async function getBook(req: Request, res: Response): Promise<Response> {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.json(errors);
  }
  
  const book = await Book.findById(req.params.id);
  if(!book) {
    return res.status(404).json({ msg: 'book not exist' });
  }

  await User.populate(book, { path: 'author', select: ['name', '_id', 'avatar']});

  return res.json(book);
}

// create book
export async function createBook(req: Request, res: Response): Promise<Response> {

  const files = req.files as { [fieldname: string]: Express.Multer.File[] };

  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    await fs.unlink(files.front[0].path);
    await fs.unlink(files.file[0].path);
    return res.status(400).json(errors);
  }

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

// update book
export async function updateBook(req: Request, res: Response): Promise<Response> {

  const files = req.files as { [fieldname: string]: Express.Multer.File[] };

  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    await fs.unlink(files.front[0].path);
    await fs.unlink(files.file[0].path);
    return res.status(400).json(errors);
  }


  let book = await Book.findById(req.params.id) as IBook;
  if(req.user.id !== book.author.toString()) {
    await fs.unlink(files.front[0].path);
    await fs.unlink(files.file[0].path);
    return res.status(403).json({ msg: 'not authorized' });
  }

  let front = book.img;
  let file = book.file;

  if(files.front) {
    front = files.front[0].path;
    await fs.unlink(book.img)
  }

  if(files.file) {
    file = files.file[0].path;
    await fs.unlink(book.file)
  }

  try {
    book = await Book.findByIdAndUpdate(req.params.id, {
      ...req.body,
      img: front,
      file
    }, { new: true }) as IBook;  

    return res.json(book);

  } catch(err) {
    return res.status(500).json({ msg: 'there was an error' });
  }
}

// delete book
export async function deleteBook(req: Request, res: Response): Promise<Response> {
  
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  const book = await Book.findById(req.params.id) as IBook;
  if(book.author.toString() !== req.user.id) {
    return res.status(403).json({ msg: 'not authorized' });
  }

  await fs.unlink(book.img);
  await fs.unlink(book.file);
  
  await Book.findByIdAndDelete(req.params.id);

  return res.json(book);
}