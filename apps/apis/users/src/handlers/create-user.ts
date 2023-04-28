import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../database/db';

export const createUser = async (req: Request, res: Response) => {
  const id = uuidv4();
  db.$.insert({ ...req.body, id }).commit();
  res.status(201).json({ id });
};
