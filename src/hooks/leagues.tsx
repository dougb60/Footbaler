import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useReducer,
} from 'react';

import { LeaguesProps } from '../global/interfaces';

export enum LeagueTypes {
  SET_LEAGUE = 'SET_LEAGUE',
  SET_SELECTED_LEAGUE = 'SET_SELECTED_LEAGUE',
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
      return { ...state, leagues: action.payload?.leagues };
    }
    case LeagueTypes.SET_SELECTED_LEAGUE: {
      return { ...state, selectedId: action.payload?.selectedId };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function LeagueProvider({ children }: ProviderProps) {
  const [state, dispatch] = useReducer(leagueReducer, initialState);

  const value = {
    leagues: state.leagues,
    selectedId: state.selectedId,
    dispatch,
  };

  const props = useMemo(() => ({ ...value }), [value]);
  return (
    <LeagueContext.Provider value={props}>{children}</LeagueContext.Provider>
  );
}

function useLeague() {
  const context = useContext(LeagueContext);

  return context;
}

export { LeagueProvider, useLeague };
