import { connect } from 'mongoose';
import './lib/env';

export async function connectDB() {
  await connect(process.env.MONGODB_URI || '', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });

  console.log('DB is Connected');
}