import { Result, err, ok } from 'neverthrow';
import { fetchUsers } from '../net';
import fetchMatches from '../net/fetch-matches';
import type { User } from '@pong/users';
import type { Match } from '@pong/matches';
import weeklyTrend from './weekly-trend';

// @todo
type Ranking = any;

const toRanking =
  (matches: Match[]) =>
  (user: User): Ranking => {
    return { ...user, weeklyTrend: weeklyTrend({ userId: user.id, matches }) };
  };

const getRankings = async (): Promise<Result<Ranking[], Error>> => {
  const [matches, users] = await Promise.all([fetchMatches(), fetchUsers()]);

  if (matches.isErr() || users.isErr()) {
    return err(new Error('Unable to fetch'));
  }

  const rankings = users.value.map((user) =>
    toRanking(
      matches.value.filter(
        ({ playerA, playerB }) => playerA === user.id || playerB === user.id
      )
    )(user)
  );

  return ok(rankings);
};

export default getRankings;
