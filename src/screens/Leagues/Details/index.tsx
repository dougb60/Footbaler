import React from 'react';

import { Header, StandingsTable } from '../../../components/';
import { LeagueDetailsProps } from '../../../routes/routes.stack';
import { Container, ContentContainer } from './styles';

const Details: React.FC<LeagueDetailsProps> = ({ navigation }) => {
  const mockObj = [
    [
      {
        rank: 1,
        points: 12,
        team: {
          id: 42,
          name: 'Arsenal',
          logo: 'https://media.api-sports.io/football/teams/42.png',
        },
        all: {
          played: 4,
          win: 4,
          draw: 0,
          lose: 0,
          goals: {
            for: 11,
            against: 3,
          },
        },
      },
    ],
  ];

  return (
    <Container>
      <Header label="Detalhes da liga" back={() => navigation.goBack()} />
      <ContentContainer>
        <StandingsTable standingProps={mockObj.flat()} />
      </ContentContainer>
    </Container>
  );
};

export default Details;
