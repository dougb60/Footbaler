import { format, parse, differenceInDays } from 'date-fns';
import React from 'react';

import { APIResponse, PlayersProps } from '../global/interfaces';
import { PlayersAction, PlayersTypes } from '../hooks/players';
import api from '../services/api';
import { getData, removeData, storeData } from '../utils/storage';
import { StorageKeys } from '../utils/storage-keys';

export async function fetchPlayers(
  dispatch: React.Dispatch<PlayersAction>,
  teamId: number
) {
  const lastUpdated = await getData<string>(StorageKeys.PLAYERS_LAST_GET);
  const playersStored = await getData<PlayersProps[]>(
    StorageKeys.PLAYERS_STORAGE
  );
  const hasPlayers = playersStored?.find((player) => player.team.id === teamId);
  if (lastUpdated && hasPlayers) {
    const formatLastDate = parse(lastUpdated, 'dd/MM/yyyy', new Date());
    const diffDays = differenceInDays(formatLastDate, new Date());

    if (diffDays < 3) {
      dispatch({
        type: PlayersTypes.SET_PLAYERS,
        payload: { players: hasPlayers ?? [] },
      });

      return null;
    }

    await removeData(StorageKeys.PLAYERS_STORAGE);
    const filteredPlayers = playersStored?.filter(
      (player) => player.team.id !== teamId
    );
    await removeData(StorageKeys.PLAYERS_LAST_GET);
    await storeData(filteredPlayers, StorageKeys.PLAYERS_STORAGE);
  }

  const queryParams = `?team=${teamId}`;
  const rawData = await api.get<APIResponse<PlayersProps>>(
    `players/squads${queryParams}`
  );
  const players = rawData.data.response[0];
  const getAt = format(new Date(), 'dd/MM/yyyy');

  if (playersStored) {
    playersStored.push(players);
    await storeData(playersStored, StorageKeys.PLAYERS_STORAGE);
  } else {
    await storeData(Array(players), StorageKeys.PLAYERS_STORAGE);
  }
  await storeData(getAt, StorageKeys.PLAYERS_LAST_GET);

  dispatch({
    type: PlayersTypes.SET_PLAYERS,
    payload: { players },
  });
}
