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
}
