import { Schema, model, Document } from 'mongoose';

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  avatar: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  sex: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'USER_ROLE' 
  },
}, {
  timestamps: true
});

export interface IUser extends Document {
  name: string;
  avatar: string;
  email: string;
  password: string;
  sex: 'male' | 'female';
  role: 'USER_ROLE' | 'ADMIN_ROLE';
};


export default model<IUser>('user', UserSchema);