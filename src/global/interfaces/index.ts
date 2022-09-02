export interface APIResponse<T> {
  response: T[];
}

// Leagues
export interface LeaguesProps {
  league: { id: number; name: string; type: string; logo?: string };
  country: {
    name: string;
    code: string | null;
    flag: string | null;
  };
  seasons: [
    {
      start: string;
      end: string;
      current: boolean;
      coverage: {
        standings: boolean;
      };
    }
  ];
}

// Standings
export interface APIStandingResponseProps {
  league: APIStandingProps;
}

export interface APIStandingProps {
  id: number;
  standings: [
    [
      {
        rank: number;
        points: number;
        team: { id: number; name: string; logo: string | null };
        all: { played: number; win: number; draw: number; lose: number };
      }
    ]
  ];
}

export interface FlatStandingProps {
  leagueId: number;
  standings: [
    {
      rank: number;
      points: number;
      team: { id: number; name: string; logo: string | null };
      all: { played: number; win: number; draw: number; lose: number };
    }
  ];
}

export interface StoredStandingsProps extends FlatStandingProps {
  leagueId: number;
}

// Teams
export interface TeamsProps {
  team: {
    id: number;
    name: string;
    code: string;
    country: string;
    founded: number;
    national: boolean;
    logo: string;
  };
  venue: {
    id: number;
    name: string;
    address: string;
    city: string;
    capacity: number;
    surface: string;
    image: string;
  };
}

// Players
export interface StoragePlayersProps {
  team: { id: number };
}

export interface PlayersProps extends StoragePlayersProps {
  players: {
    id: number;
    name: string;
    age: number;
    number: number;
    position: string;
    photo: string;
  }[];
}
