export interface Match {
  dateTime: Date;
  teamA: User;
  teamB: User;
  winner: User;
  eloDiff: {
    teamA: number;
    teamB: number;
  };
}

export interface User {
  id: string;
  name: string;
  profilePicture?: string;
  elo: number;
  lastMatch?: Match;
}
