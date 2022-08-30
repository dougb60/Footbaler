import { isAfter, isBefore, parse } from 'date-fns';

import { LeaguesProps } from '../global/interfaces';

export function filterLeagues(leagues: LeaguesProps[]) {
  const filteredLeagues = leagues.filter((league) => {
    const hasStandings = league.seasons[0].coverage.standings;
    const initialDate = parse(
      league.seasons[0].start,
      'yyyy-MM-dd',
      new Date()
    );
    const finalDate = parse(league.seasons[0].end, 'yyyy-MM-dd', new Date());

    const isActive =
      isBefore(initialDate, new Date()) && isAfter(finalDate, new Date());

    if (hasStandings && isActive) return league;
  });

  return filteredLeagues.sort((league) => league.league.id);
}
