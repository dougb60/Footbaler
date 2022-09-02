import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useReducer,
} from 'react';

import { PlayersProps } from '../global/interfaces';

export enum PlayersTypes {
  SET_PLAYERS = 'SET_PLAYERS',
}

interface ProviderProps {
  children: ReactNode;
}

export interface PlayersAction {
  type: PlayersTypes;
  payload?: { players?: PlayersProps };
}

interface PlayersContextProps {
  dispatch: React.Dispatch<PlayersAction>;
  players: PlayersProps;
}

const initialState: Partial<PlayersContextProps> = {
  players: { players: [], team: { id: 0 } },
};

const PlayersContext =
  createContext<Partial<PlayersContextProps>>(initialState);

function teamsReducer(
  state = initialState,
  action: PlayersAction
): Partial<PlayersContextProps> {
  switch (action.type) {
    // case TeamsTypes.SET_TEAMS: {
    //   return { ...state, teams: action.payload?.teams };
    // }
    // case TeamsTypes.SET_SELECTED_TEAM: {
    //   return { ...state, selectedId: action.payload?.selectedId };
    // }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function PlayersProvider({ children }: ProviderProps) {
  const [state, dispatch] = useReducer(teamsReducer, initialState);

  const value = {
    teams: state.players,
    dispatch,
  };

  const props = useMemo(() => ({ ...value }), [value]);
  return (
    <PlayersContext.Provider value={props}>{children}</PlayersContext.Provider>
  );
}

function usePlayers() {
  const context = useContext(PlayersContext);

  return context;
}

export { PlayersProvider, usePlayers };
