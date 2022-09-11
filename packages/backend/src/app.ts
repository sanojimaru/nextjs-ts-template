import express, { Application } from 'express';
import index from './home';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', index);

export default app;
