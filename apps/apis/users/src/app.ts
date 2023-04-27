import express from 'express';
import { userRoutes } from './routes/users.routes';

export const app = express();

app.use(express.json());
app.use('/users', userRoutes);
