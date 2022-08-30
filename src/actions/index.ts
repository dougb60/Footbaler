import { format, parse, differenceInDays } from 'date-fns';
import React from 'react';

import { APIResponse, LeaguesProps } from '../global/interfaces';
import { LeagueAction, LeagueTypes } from '../hooks/Leagues';
import api from '../services/api';
import { getData, removeData, storeData } from '../utils/storage';
import { StorageKeys } from '../utils/storage-keys';

export async function fetchLeagues(dispatch: React.Dispatch<LeagueAction>) {
  const lastUpdated = await getData<string>(StorageKeys.LEAGUE_STORAGE);
  if (lastUpdated) {
    const formatLastDate = parse(lastUpdated, 'dd/MM/yyyy', new Date());
    const diffDays = differenceInDays(formatLastDate, new Date());

    if (diffDays < 1) return;
    await removeData(StorageKeys.LEAGUE_LAST_GET);
    await removeData(StorageKeys.LEAGUE_STORAGE);
  }

  const queryParams = `?season=${new Date().getFullYear()}&code=BR`;
  const rawData = await api.get<APIResponse<LeaguesProps>>(
    `leagues${queryParams}`
  );
  const leagues = rawData.data.response;
  const getAt = format(new Date(), 'dd/MM/yyyy');

  await storeData(getAt, StorageKeys.LEAGUE_LAST_GET);
  await storeData(leagues, StorageKeys.LEAGUE_STORAGE);

  dispatch({
    type: LeagueTypes.SET_LEAGUE,
    payload: { leagues },
  });
}
