import { Request, Response } from 'express';
import { db } from '../database/db';

export const getMatch = async (req: Request, res: Response) => {
  const { matchId } = req.params;
  const match = db.$.get(matchId).data;
  if (match) {
    res.status(200).json(match);
  } else {
    res.status(404).json({ message: 'Match not found' });
  }
};
