import React, { ReactNode } from 'react';

import { LeagueProvider } from './leagues';
import { StandingsProvider } from './standings';

interface ProviderProps {
  children: ReactNode;
}

export const Providers: React.FC<ProviderProps> = ({ children }) => {
  return (
    <LeagueProvider>
      <StandingsProvider>{children}</StandingsProvider>
    </LeagueProvider>
  );
};
