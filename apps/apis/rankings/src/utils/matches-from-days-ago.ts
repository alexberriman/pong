import type { Match } from '@pong/matches';

const matchesFromDaysAgo =
  (days: number) =>
  (matches: Match[]): Match[] => {
    const dateThreshold = new Date();
    dateThreshold.setDate(dateThreshold.getDate() - days);

    return matches.filter((match) => {
      const matchDate = new Date(match.createdAt);
      return matchDate >= dateThreshold;
    });
  };

export default matchesFromDaysAgo;
