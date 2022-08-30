import React, { ReactNode } from 'react';

import { LeagueProvider } from './leagues';

interface ProviderProps {
  children: ReactNode;
}

export const Providers: React.FC<ProviderProps> = ({ children }) => {
  return <LeagueProvider>{children}</LeagueProvider>;
};
