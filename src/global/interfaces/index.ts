export interface APIResponse<T> {
  response: T[];
}

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

export interface StandingResponseProps {
  league: StandingProps;
}

export interface StandingProps {
  standings: {
    rank: number;
    points: number;
    team: { id: number; name: string; logo: string | null };
    all: { played: number; win: number; draw: number; lose: number };
  }[];
}
