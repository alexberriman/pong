export type Match = {
  id: string; // uuid of match
  playerA: string; // uuid of player A
  playerB: string; // uuid of player B
  winner: string; // uuid of winner
  playerAEloDiff: number; // diff in elo player A received
  playerBEloDiff: number; // diff in elo player B received
  createdAt: string; // ISO datetime match was created
  updatedAt: string; // ISO datetime match was updated
};

export type RequiredCreateMatchProperties = Pick<
  Match,
  'playerA' | 'playerB' | 'winner'
>;
