import { Router } from 'express';
import { listRankings } from '../handlers';

export const routes = Router();

routes.get('/', listRankings);
