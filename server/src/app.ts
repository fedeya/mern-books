import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';

import routes from './routes';

const app = express();

// settings

app.set('port', process.env.PORT || 4000);

// middleware

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// masters route
app.use('/api/', routes);
app.use('/images', express.static(path.join(__dirname, '../images/')));

export default app;