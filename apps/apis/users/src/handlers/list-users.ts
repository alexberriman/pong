import { Request, Response } from 'express';
import { db } from '../database/db';

export const listUsers = async (req: Request, res: Response) => {
  try {
    const condition = req.query['condition']
      ? JSON.parse(req.query['condition'] as string)
      : undefined;

    const users = db.$.find(condition).orderBy({ elo: 'desc' });
    res.status(200).json({ data: users.data });
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.warn('[error] listUsers', e.message);
    }

    res.status(400).json({ message: 'Bad request' });
  }
};
