import type { Team } from './team.interface';

export interface Match {
  // ? Graph structure. previousMatch
  id: number;
  teams: Team[];
  winner: Team | null;

  matchSettings: MatchSettings;
}

interface MatchSettings {
  round: {
    scoreToWin: number;
    bestOf: number;
  }
}
