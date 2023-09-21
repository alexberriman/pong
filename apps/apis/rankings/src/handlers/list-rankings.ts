import { Request, Response } from 'express';
import getRankings from '../utils/get-rankings';

export const listRankings = async (req: Request, res: Response) => {
  const rankings = await getRankings();
  if (rankings.isErr()) {
    res.status(400).json({ message: 'Bad request' });
    return;
  }
  res.status(200).json({ data: rankings.value });
};
