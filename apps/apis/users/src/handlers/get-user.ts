import { Request, Response } from 'express';
import { db } from '../database/db';

export const getUser = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const user = db.$.get(userId).data;
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};
