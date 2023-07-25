import type { User } from '@pong/users';
import recalculateElo from './recalculate-elo';

describe('recalculateElo', () => {
  const playerA = { id: '1', elo: 1000 } as unknown as User;
  const playerB = { id: '2', elo: 1000 } as unknown as User;

  it('should update playerA ELO when playerA is the winner', () => {
    const result = recalculateElo({ playerA, playerB, winner: playerA });
    expect(result.playerA.elo).toBeGreaterThan(playerA.elo);
    expect(result.playerB.elo).toBeLessThan(playerB.elo);
  });

  it('should update playerB ELO when playerB is the winner', () => {
    const result = recalculateElo({ playerA, playerB, winner: playerB });
    expect(result.playerB.elo).toBeGreaterThan(playerB.elo);
    expect(result.playerA.elo).toBeLessThan(playerA.elo);
  });
});
