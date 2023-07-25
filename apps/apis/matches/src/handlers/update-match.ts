import { Request, Response } from 'express';
import { db } from '../database/db';

export const updateMatch = async (req: Request, res: Response) => {
  const { matchId } = req.params;
  const match = db.$.get(matchId);

  if (!match.exists) {
    res.status(404).json({ message: 'Match not found' });
    return;
  }

  match.set(req.body).commit();
  res.status(204).send();
};
