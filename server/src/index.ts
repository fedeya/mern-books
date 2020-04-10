import app from './app';
import { connectDB } from './database';

async function main() {
  await app.listen(app.get('port'));
  console.log('Server on port', app.get('port'));
}

connectDB();
main();