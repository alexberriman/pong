import { Request, Response } from 'express';
import { db } from '../database/db';

export const listMatches = async (req: Request, res: Response) => {
  try {
    const condition = req.query['condition']
      ? JSON.parse(req.query['condition'] as string)
      : undefined;

    const matches = db.$.find(condition);
    res.status(200).json({ data: matches.data });
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.warn('[error] listMatches', e.message);
    }

    res.status(400).json({ message: 'Bad request' });
  }
};
