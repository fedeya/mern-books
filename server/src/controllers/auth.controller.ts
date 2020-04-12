import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';

import User from '../models/user';

export async function Login(req: Request, res: Response): Promise<Response> {

  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if(!user) {
    return res.status(404).json({ msg: 'user not exist' });
  }

  const valid = await bcrypt.compare(password, user.password);
  if(!valid) {
    return res.status(400).json({ msg: 'the password is not valid' });
  }

  const payload = {
    user: {
      id: user._id
    }
  }

  const token = jwt.sign(payload, process.env.SECRET as string, {
    expiresIn: 43200
  });
  return res.json(token);
}