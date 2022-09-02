import React, { ReactNode } from 'react';

import { LeagueProvider } from './leagues';
import { StandingsProvider } from './standings';
import { TeamsProvider } from './teams';

interface ProviderProps {
  children: ReactNode;
}

export const Providers: React.FC<ProviderProps> = ({ children }) => {
  return (
    <LeagueProvider>
      <StandingsProvider>
        <TeamsProvider>{children}</TeamsProvider>
      </StandingsProvider>
    </LeagueProvider>
  );
};
