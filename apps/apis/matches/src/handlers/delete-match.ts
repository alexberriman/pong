import { Request, Response } from 'express';
import { db } from '../database/db';

export const deleteMatch = async (req: Request, res: Response) => {
  const { matchId } = req.params;
  const match = db.$.find(matchId);
  if (!match.exists) {
    res.status(404).json({ message: 'Match not found' });
    return;
  }

  match.delete().commit();
  res.status(204).send();
};
