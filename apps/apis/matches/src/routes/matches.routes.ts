import { Router } from 'express';
import {
  createMatch,
  getMatch,
  updateMatch,
  deleteMatch,
  listMatches,
} from '../handlers';

export const matchRoutes = Router();

matchRoutes.get('/', listMatches);
matchRoutes.post('/', createMatch);
matchRoutes.get('/:matchId', getMatch);
matchRoutes.put('/:matchId', updateMatch);
matchRoutes.delete('/:matchId', deleteMatch);
