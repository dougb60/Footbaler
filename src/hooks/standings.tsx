import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useReducer,
} from 'react';

import { FlatStandingProps } from '../global/interfaces';

export enum StandingTypes {
  SET_STANDINGS = 'SET_STANDINGS',
}

interface ProviderProps {
  children: ReactNode;
}

export interface StandingsAction {
  type: StandingTypes;
  payload?: { selectedLeague?: number; standings?: FlatStandingProps };
}

interface StandingsContextProps {
  selectedId: number;
  dispatch: React.Dispatch<StandingsAction>;
  standings: FlatStandingProps;
}

const initialState: Partial<StandingsContextProps> = {
  selectedId: 0,
  standings: {
    leagueId: 0,
    standings: [
      {
        all: { draw: 0, lose: 0, played: 0, win: 0 },
        points: 0,
        rank: 0,
        team: { id: 0, logo: '', name: '' },
      },
    ],
  },
};

const StandingsContext =
  createContext<Partial<StandingsContextProps>>(initialState);

function standingsReducer(
  state = initialState,
  action: StandingsAction
): Partial<StandingsContextProps> {
  switch (action.type) {
    case StandingTypes.SET_STANDINGS: {
      return { ...state, standings: action.payload?.standings };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function StandingsProvider({ children }: ProviderProps) {
  const [state, dispatch] = useReducer(standingsReducer, initialState);

  const value = { standings: state.standings, dispatch };

  const props = useMemo(() => ({ ...value }), [value]);

  return (
    <StandingsContext.Provider value={props}>
      {children}
    </StandingsContext.Provider>
  );
}

function useStandings() {
  const context = useContext(StandingsContext);

  return context;
}

export { StandingsProvider, useStandings };
