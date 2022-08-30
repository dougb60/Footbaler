import React, { useEffect, useState } from 'react';

import { Header, StandingsTable } from '../../../components/';
import {
  APIResponse,
  StandingProps,
  StandingResponseProps,
} from '../../../global/interfaces';
import { LeagueDetailsProps } from '../../../routes/routes.stack';
import api from '../../../services/api';
import { Container, ContentContainer } from './styles';

const Details: React.FC<LeagueDetailsProps> = ({ navigation }) => {
  const [standingsArr, setStandingsArr] = useState<StandingProps>({
    standings: [],
  });

  useEffect(() => {
    async function fetchStandings() {
      const queryParams = `?season=${new Date().getFullYear()}&league=39`;
      const leaguesData = await api.get<APIResponse<StandingResponseProps>>(
        `standings${queryParams}`
      );
      const raw = leaguesData.data.response.map((a) => a.league.standings);

      setStandingsArr({ standings: raw.flat() });
    }

    fetchStandings();
  }, []);

  return (
    <Container>
      <Header label="Detalhes da liga" back={() => navigation.goBack()} />
      <ContentContainer>
        <StandingsTable
          standings={standingsArr.standings.flat()}
          onPress={(id) => console.log(id)}
        />
      </ContentContainer>
    </Container>
  );
};

export default Details;
