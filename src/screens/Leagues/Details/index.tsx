import React, { useEffect } from 'react';

import { fetchStandings } from '../../../actions/standings';
import { Header, StandingsTable } from '../../../components/';
import { useLeague } from '../../../hooks/leagues';
import { useStandings } from '../../../hooks/standings';
import { LeagueDetailsProps } from '../../../routes/routes.stack';
import { Container, ContentContainer } from './styles';

const Details: React.FC<LeagueDetailsProps> = ({ navigation }) => {
  const { dispatch, standings } = useStandings();
  const { selectedId } = useLeague();

  useEffect(() => {
    fetchStandings(dispatch!, selectedId ?? 0);
  }, [dispatch, selectedId]);

  return (
    <Container>
      <Header label="Detalhes da liga" back={() => navigation.goBack()} />
      <ContentContainer>
        <StandingsTable
          standings={standings?.standings}
          onPress={(id) => {
            navigation.navigate('Teams', { teamId: id });
          }}
        />
      </ContentContainer>
    </Container>
  );
};

export default Details;
