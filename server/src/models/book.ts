import { Schema, model, Document } from 'mongoose';

const BookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  bookAuthor: {
    type: String,
    required: true
  },
  file: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

export interface IBook extends Document {
  title: string;
  description: string;
  img: string;
  author: Schema.Types.ObjectId;
  file: string;
};

export default model<IBook>('book', BookSchema);