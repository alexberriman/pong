import { MultiElo } from 'multi-elo';
import type { User } from '@pong/users';

type Options = {
  playerA: User;
  playerB: User;
  winner: User;
};

const recalculateElo = ({
  playerA,
  playerB,
  winner,
}: Options): { playerA: User; playerB: User } => {
  const isPlayerAWinner = winner.id === playerA.id;
  const loser = isPlayerAWinner ? playerB : playerA;

  const [winnerElo, loserElo] = MultiElo.getNewRatings([winner.elo, loser.elo]);

  if (!winnerElo || !loserElo) {
    throw Error('Unable to calculate elo');
  }

  return {
    playerA: { ...playerA, elo: isPlayerAWinner ? winnerElo : loserElo },
    playerB: { ...playerB, elo: isPlayerAWinner ? loserElo : winnerElo },
  };
};

export default recalculateElo;
