import { Request, Response } from 'express';
import { db } from '../database/db';

export const updateUser = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const user = db.$.get(userId);

  if (!user.exists) {
    res.status(404).json({ message: 'User not found' });
    return;
  }

  user.set(req.body).commit();
  res.status(204).send();
};
