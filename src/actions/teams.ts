import { format, parse, differenceInDays } from 'date-fns';
import React from 'react';

import { APIResponse, TeamsProps } from '../global/interfaces';
import { TeamsAction, TeamsTypes } from '../hooks/teams';
import api from '../services/api';
import { getData, removeData, storeData } from '../utils/storage';
import { StorageKeys } from '../utils/storage-keys';

export async function fetchTeams(
  dispatch: React.Dispatch<TeamsAction>,
  teamId: number
) {
  const lastUpdated = await getData<string>(StorageKeys.TEAMS_LAST_GET);
  const teamsStored = await getData<TeamsProps[]>(StorageKeys.TEAMS_STORAGE);
  const hasTeams = teamsStored?.find((team) => team.team.id === teamId);

  if (lastUpdated && hasTeams) {
    const formatLastDate = parse(lastUpdated, 'dd/MM/yyyy', new Date());
    const diffDays = differenceInDays(formatLastDate, new Date());

    if (diffDays < 7) {
      dispatch({
        type: TeamsTypes.SET_TEAMS,
        payload: { teams: teamsStored ?? [] },
      });

      dispatch({
        type: TeamsTypes.SET_SELECTED_TEAM,
        payload: { selectedId: teamId },
      });

      return null;
    }

    await removeData(StorageKeys.LEAGUE_STORAGE);
    const filteredStandings = teamsStored?.filter(
      (store) => store.team.id !== teamId
    );
    await removeData(StorageKeys.LEAGUE_LAST_GET);
    await storeData(filteredStandings, StorageKeys.TEAMS_STORAGE);
  }

  const queryParams = `?id=${teamId}`;
  const rawData = await api.get<APIResponse<TeamsProps>>(`teams${queryParams}`);
  const teams = rawData.data.response;

  const getAt = format(new Date(), 'dd/MM/yyyy');

  if (teamsStored) {
    teamsStored.push(...teams);
    await storeData(teamsStored, StorageKeys.TEAMS_STORAGE);
  } else {
    await storeData(teams, StorageKeys.TEAMS_STORAGE);
  }
  await storeData(getAt, StorageKeys.TEAMS_LAST_GET);

  dispatch({
    type: TeamsTypes.SET_TEAMS,
    payload: { teams },
  });

  dispatch({
    type: TeamsTypes.SET_SELECTED_TEAM,
    payload: { selectedId: teamId },
  });
}
