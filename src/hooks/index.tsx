import React, { ReactNode } from 'react';

import { LeagueProvider } from './Leagues';

interface ProviderProps {
  children: ReactNode;
}

export const Providers: React.FC<ProviderProps> = ({ children }) => {
  return <LeagueProvider>{children}</LeagueProvider>;
};
