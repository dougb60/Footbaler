import { format, parse, differenceInHours } from 'date-fns';
import React from 'react';

import {
  APIResponse,
  APIStandingResponseProps,
  FlatStandingProps,
} from '../global/interfaces';
import { StandingsAction, StandingTypes } from '../hooks/standings';
import api from '../services/api';
import { getData, removeData, storeData } from '../utils/storage';
import { StorageKeys } from '../utils/storage-keys';

export async function fetchStandings(
  dispatch: React.Dispatch<StandingsAction>,
  leagueId: number
) {
  const lastUpdated = await getData<string>(StorageKeys.STANDINGS_LAST_GET);
  const storadStandings = await getData<FlatStandingProps[]>(
    StorageKeys.STANDINGS_STORAGE
  );

  const hasStandings = storadStandings?.find(
    (stand) => stand.leagueId === leagueId
  );

  if (lastUpdated && hasStandings) {
    const formatLastDate = parse(
      lastUpdated,
      'dd/MM/yyyy HH:mm:ss',
      new Date()
    );
    const diffHours = differenceInHours(new Date(), formatLastDate);

    if (diffHours < 2) {
      dispatch({
        type: StandingTypes.SET_STANDINGS,
        payload: { standings: hasStandings },
      });

      return null;
    }

    await removeData(StorageKeys.STANDINGS_STORAGE);
    const filteredStandings = storadStandings?.filter(
      (store) => store.leagueId !== leagueId
    );
    await storeData(filteredStandings, StorageKeys.STANDINGS_STORAGE);
    await removeData(StorageKeys.LEAGUE_LAST_GET);
  }

  const queryParams = `?season=${new Date().getFullYear()}&league=${leagueId}`;
  const rawData = await api.get<APIResponse<APIStandingResponseProps>>(
    `standings${queryParams}`
  );

  const rawStandings = rawData.data.response.map((r) => r.league)[0];
  const standings = {
    leagueId: rawStandings.id,
    standings: rawStandings.standings[0],
  };

  if (storadStandings) {
    storadStandings.push(standings);
    await storeData(storadStandings, StorageKeys.STANDINGS_STORAGE);
  } else {
    await storeData(Array(standings), StorageKeys.STANDINGS_STORAGE);
  }

  const getAt = format(new Date(), 'dd/MM/yyyy HH:mm:ss');

  await storeData(getAt, StorageKeys.STANDINGS_LAST_GET);

  dispatch({
    type: StandingTypes.SET_STANDINGS,
    payload: {
      selectedLeague: leagueId,
      standings,
    },
  });
}
