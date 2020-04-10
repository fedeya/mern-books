import { Schema, model, Document } from 'mongoose';

const BookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  img: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }
}, {
  timestamps: true
});

interface IBook extends Document {
  title: string;
  description: string;
  img: string;
  author: Schema.Types.ObjectId;
};

export default model<IBook>('book', BookSchema);