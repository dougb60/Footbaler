import React, { createContext, ReactNode, useContext, useReducer } from 'react';

import { LeaguesProps } from '../global/interfaces';

export enum LeagueTypes {
  SET_LEAGUE = 'SET_LEAGUE',
}

interface ProviderProps {
  children: ReactNode;
}

export interface LeagueAction {
  type: LeagueTypes;
  payload?: { selectedId?: number; leagues?: LeaguesProps[] };
}

interface LeagueContextProps {
  selectedId: number;
  dispatch: React.Dispatch<LeagueAction>;
  leagues: LeaguesProps[];
}

const initialState: Partial<LeagueContextProps> = {
  selectedId: 0,
  leagues: [],
};

const LeagueContext = createContext<Partial<LeagueContextProps>>(initialState);

function leagueReducer(
  state = initialState,
  action: LeagueAction
): Partial<LeagueContextProps> {
  switch (action.type) {
    case LeagueTypes.SET_LEAGUE: {
      if (state.leagues?.length === 0)
        return { ...state, leagues: state.leagues };

      return state;
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function LeagueProvider({ children }: ProviderProps) {
  const [state, dispatch] = useReducer(leagueReducer, initialState);

  const value = { state, dispatch };

  return (
    <LeagueContext.Provider value={value}>{children}</LeagueContext.Provider>
  );
}

function useLeague() {
  const context = useContext(LeagueContext);

  return context;
}

export { LeagueProvider, useLeague };
