import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useReducer,
} from 'react';

import { TeamsProps } from '../global/interfaces';

export enum TeamsTypes {
  SET_TEAMS = 'SET_TEAMS',
  SET_SELECTED_TEAM = 'SET_SELECTED_TEAM',
}

interface ProviderProps {
  children: ReactNode;
}

export interface TeamsAction {
  type: TeamsTypes;
  payload?: { selectedId?: number; teams?: TeamsProps[] };
}

interface TeamsContextProps {
  selectedId: number;
  dispatch: React.Dispatch<TeamsAction>;
  teams: TeamsProps[];
}

const initialState: Partial<TeamsContextProps> = {
  selectedId: 0,
  teams: [],
};

const TeamsContext = createContext<Partial<TeamsContextProps>>(initialState);

function teamsReducer(
  state = initialState,
  action: TeamsAction
): Partial<TeamsContextProps> {
  switch (action.type) {
    case TeamsTypes.SET_TEAMS: {
      return { ...state, teams: action.payload?.teams };
    }
    case TeamsTypes.SET_SELECTED_TEAM: {
      return { ...state, selectedId: action.payload?.selectedId };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function TeamsProvider({ children }: ProviderProps) {
  const [state, dispatch] = useReducer(teamsReducer, initialState);

  const value = {
    teams: state.teams,
    selectedId: state.selectedId,
    dispatch,
  };

  const props = useMemo(() => ({ ...value }), [value]);
  return (
    <TeamsContext.Provider value={props}>{children}</TeamsContext.Provider>
  );
}

function useTeams() {
  const context = useContext(TeamsContext);

  return context;
}

export { TeamsProvider, useTeams };
