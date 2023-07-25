import express from 'express';
import cors from 'cors';
import { matchRoutes } from './routes/matches.routes';

export const app = express();

app.use(cors());
app.use(express.json());
app.use('/matches', matchRoutes);
