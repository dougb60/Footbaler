import React from 'react';

import { CustomText, Header } from '../../components';
import {
  Container,
  ContentContainer,
  LeagueList,
  Card,
  LeagueImage,
  LeagueInfoContainer,
} from './styles';

const Ligas: React.FC = () => {
  const obj = [
    {
      id: 1,
      name: 'LIGA 1',
      type: 'CUP',
      logo: 'https://media.api-sports.io/football/leagues/2.png',
    },
    {
      id: 2,
      name: 'LIGA 1',
      type: 'CUP',
      logo: 'https://media.api-sports.io/football/leagues/2.png',
    },
    {
      id: 3,
      name: 'LIGA 1',
      type: 'CUP',
      logo: 'https://media.api-sports.io/football/leagues/2.png',
    },
    {
      id: 4,
      name: 'LIGA 1',
      type: 'CUP',
      logo: 'https://media.api-sports.io/football/leagues/2.png',
    },
    {
      id: 5,
      name: 'LIGA 1',
      type: 'CUP',
      logo: 'https://media.api-sports.io/football/leagues/2.png',
    },
  ];

  return (
    <Container>
      <Header label="Ligas" />
      <ContentContainer>
        <LeagueList
          data={obj}
          keyExtractor={(item) => {
            return item.id.toString();
          }}
          renderItem={({ item }) => {
            return (
              <Card>
                <LeagueImage source={{ uri: item.logo }} />
                <LeagueInfoContainer>
                  <CustomText type="bold" fontSize={28}>
                    {item.name}
                  </CustomText>
                </LeagueInfoContainer>
              </Card>
            );
          }}
        />
      </ContentContainer>
    </Container>
  );
};

export default Ligas;
