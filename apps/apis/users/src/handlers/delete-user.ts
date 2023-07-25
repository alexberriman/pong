import { Request, Response } from 'express';
import { db } from '../database/db';

export const deleteUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const user = db.$.find(userId);
  if (!user.exists) {
    res.status(404).json({ message: 'User not found' });
    return;
  }

  user.delete().commit();
  res.status(204).send();
};
