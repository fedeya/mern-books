import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator';
import fs from 'fs-extra';
import jwt from 'jsonwebtoken';
import validator from 'validator';

import User, { IUser } from '../models/user';

// get all users
export async function getUsers(req: Request, res: Response): Promise<Response> {
  if(!validator.isMongoId(req.user.id)) {
    return res.status(400).json({ msg: 'is not valid id' });
  }

  const user = await User.findById(req.user.id);
  if(!user) {
    return res.status(403).json({ msg: 'invalid permissions' })
  }

  try {
    const users = await User.find().select('-password');
    return res.json(users);
  } catch(err) {
    return res.status(500).json({ msg: 'there was an error' });
  }

}

// get one user by id
export async function getUser(req: Request, res: Response): Promise<Response> {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json(errors);
  }
  
  const user = await User.findById(req.params.id);
  
  return res.json(user);
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

    const payload = {
      user: {
        id: user._id
      }
    }

    const token = jwt.sign(payload, process.env.SECRET as string, {
      expiresIn: 86400
    });

    return res.json(token);

  } catch(err) {
    return res.status(500).json({ msg: 'there was a error' });
  }
 
}

export async function updateUser(req: Request, res: Response): Promise<Response> {
  
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    await fs.unlink(req.file.path);
    return res.json(errors);
  }

  let user = await User.findById(req.params.id) as IUser;
  if(user._id !== req.user.id) {
    return res.status(403).json({ msg: 'not authorized' });
  }

  const { password } = req.body;
  const salt = await bcrypt.genSalt();
  const encrypted = await bcrypt.hash(password, salt);

  user = await User.findByIdAndUpdate(req.params.id, {
    ...req.body,
    password: encrypted, 
    avatar: req.file && req.file.path || user.avatar
  }) as IUser;
  
  return res.json(user);
}

// delete user
export async function deleteUser(req: Request, res: Response): Promise<Response> {

  const errors = validationResult(req)
  if(!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  let user = await User.findById(req.user.id) as IUser;
  if(req.user.id !== user._id ) {
    return res.status(403).json({ msg: 'not authorized' });
  }

  user = await User.findByIdAndDelete(req.params.id) as IUser;
  if(!user) {
    return res.status(404).json({ msg: 'user not exist' });
  }
  await fs.unlink(user.avatar);

  return res.json(user);
}