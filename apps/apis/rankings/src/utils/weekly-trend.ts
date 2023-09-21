import type { Match } from '@pong/matches';
import matchesFromDaysAgo from './matches-from-days-ago';

type Options = {
  userId: string;
  matches: Match[];
};

const weeklyTrend = ({ userId, matches }: Options): number => {
  const weeklyGames = matchesFromDaysAgo(7)(matches);

  return (
    0 -
    weeklyGames.reduce((acc, game) => {
      if (game.playerA === userId) {
        return acc + game.playerAEloDiff;
      } else if (game.playerB === userId) {
        return acc + game.playerBEloDiff;
      }
      return acc;
    }, 0)
  );
};

export default weeklyTrend;
