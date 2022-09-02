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
    case PlayersTypes.SET_PLAYERS: {
      return { ...state, players: action.payload?.players };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function PlayersProvider({ children }: ProviderProps) {
  const [state, dispatch] = useReducer(teamsReducer, initialState);

  const value = {
    players: state.players,
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
