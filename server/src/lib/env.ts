import { config } from 'dotenv';
import { resolve } from 'path';

console.log(resolve(__dirname, '../../.env'));

config({ path: resolve(__dirname, '../../.env') });