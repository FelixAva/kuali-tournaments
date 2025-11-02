import type { Player } from './player.interface';

export interface Team {
  id: number;
  name: string;
  members: Player[];
  score: undefined; // ! Define the type of score. Another interface?

  teamSettings: TeamSettings;
}

interface TeamSettings {
}
