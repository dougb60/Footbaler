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
