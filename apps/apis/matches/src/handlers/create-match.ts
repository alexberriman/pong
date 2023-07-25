import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import type { Match, RequiredCreateMatchProperties } from '@pong/matches';
import { db } from '../database/db';
import { fetchUser, updateUser } from '../net';
import recalculateElo from '../utils/recalculate-elo';

// 🤢🤮 needs a big clean up this file

const uuidRegex = new RegExp(
  '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$'
);

const isString = (candidate: unknown): candidate is string =>
  typeof candidate === 'string';

const isValidUuidProperty = (
  candidate: Record<string, unknown>,
  propertyName: string
): boolean =>
  propertyName in candidate &&
  isString(candidate[propertyName]) &&
  uuidRegex.test(candidate[propertyName] as string);

const areValidProperties = (
  candidate: Record<string, unknown>,
  ...properties: string[]
): boolean =>
  properties.every((property) => isValidUuidProperty(candidate, property));

const isValidRequest = (
  candidate: Record<string, unknown>
): candidate is RequiredCreateMatchProperties =>
  areValidProperties(candidate, 'playerA', 'playerB', 'winner') &&
  [candidate['playerA'], candidate['playerB']].includes(candidate['winner']);

export const createMatch = async (req: Request, res: Response) => {
  if (!isValidRequest(req.body)) {
    res.status(400).json({ error: 'Invalid request' });
    return;
  }

  const userResults = await Promise.all(
    [req.body.playerA, req.body.playerB].map((id) => fetchUser({ id }))
  );

  const [playerA, playerB] = userResults.map((result) =>
    result.unwrapOr(undefined)
  );

  if (!playerA || !playerB) {
    res
      .status(500)
      .json({ error: 'An unknown error occurred. Confirm user exists.' });
    return;
  }
  const winner = req.body.winner === req.body.playerA ? playerA : playerB;
  const updated = recalculateElo({ playerA, playerB, winner });

  const updateResults = await Promise.all(
    [updated.playerA, updated.playerB].map((user) =>
      updateUser({ user: { ...user, lastMatch: new Date().toISOString() } })
    )
  );
  const wasSuccess = updateResults.map((result) => result.isOk());
  if (!wasSuccess) {
    res.status(500).json({ error: 'An error occurred updated the users' });
    return;
  }

  const match: Match = {
    ...req.body,
    id: uuidv4(),
    playerAEloDiff: playerA.elo - updated.playerA.elo,
    playerBEloDiff: playerB.elo - updated.playerB.elo,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  db.$.insert(match).commit();
  res.status(201).json({ id: match.id });
};
