import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator';
import fs from 'fs-extra';

import User from '../models/user';

// get all users
export async function getUsers(req: Request, res: Response): Promise<Response> {
  const users = await User.find();

  return res.json(users);
}

// create user
export async function createUser(req: Request, res: Response): Promise<Response> {

  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    await fs.unlink(req.file.path);
    return res.status(400).json(errors);
  }

  const { name, email, password, sex } = req.body;

  let user = await User.findOne({ email });
  if(user) {
    return res.status(400).json({ msg: 'exist account with same email' });
  }

  const avatar = req.file ? req.file.path : sex === 'male' ? 'images/users/boy.png' : 'images/users/girl.png';

  const salt = await bcrypt.genSalt(10);
  const encrypted = await bcrypt.hash(password, salt);

  user = new User({
    password: encrypted,
    avatar,
    name,
    email,
    sex
  });

  try {
    await user.save();
  } catch(err) {
    return res.status(500).json({ msg: 'there was a error' });
  }
 
  return res.json(user);
}