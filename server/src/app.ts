import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import routes from './routes';

const app = express();

// settings

app.set('port', process.env.PORT || 4000);

// middleware

app.use(morgan('dev'));
app.use(cors());

// master route
app.use('/api/', routes);

export default app;