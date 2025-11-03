import type { Match } from './match.interface';
import type { Team } from './team.interface';
import type { Category } from './category.interface';

export interface Tournament {
  // * sport: 'soccer' | 'tableTenis';
  id: number;
  name: string;

  categories: Category[];
  matches: Match[];
  teams: Team[];
  settings: TournamentSettings;
}

interface TournamentSettings {
  teams: {
    min: number;
    max: number;
    members: {
      min: number;
      max: number;
    }
  }
  modality: 'single' | 'team';
  sistemMode: 'single' | 'double' | 'roundRobin';
  prices: Price[];
}

interface Price {
  place: number;
  price: number;
}
