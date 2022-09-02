import React, { useEffect, useMemo } from 'react';
import { ActivityIndicator, Image, ScrollView } from 'react-native';

import { fetchPlayers } from '../../../actions/players';
import { CustomText, Header } from '../../../components';
import { usePlayers } from '../../../hooks/players';
import { useTeams } from '../../../hooks/teams';
import { PlayersProps } from '../../../routes/routes.stack';
import {
  Container,
  PlayersList,
  TotalPlayersContainer,
  PlayerContainer,
  InfoContainer,
  PlayerImage,
} from './styles';

const Players: React.FC<PlayersProps> = ({ navigation, route }) => {
  const {
    params: { teamName },
  } = route;
  const { selectedId } = useTeams();
  const { dispatch, players } = usePlayers();

  useEffect(() => {
    fetchPlayers(dispatch!, selectedId ?? 0);
  }, [selectedId]);

  return (
    <Container>
      <Header label={teamName} back={() => navigation.goBack()} />
      <TotalPlayersContainer>
        <CustomText type="medium" fontColor="shape">
          jogadores no plantel
        </CustomText>
      </TotalPlayersContainer>
      {players?.players.length === 0 ? (
        <ActivityIndicator color="red" />
      ) : (
        <PlayersList
          data={players?.players}
          renderItem={({ item }) => (
            <PlayerContainer>
              <PlayerImage source={{ uri: item.photo }} />
              <InfoContainer>
                <CustomText type="regular" fontColor="dark">
                  Nome: {item.name}
                </CustomText>
              </InfoContainer>
              <InfoContainer>
                <CustomText type="regular" fontColor="dark">
                  Camisa: {item.number}
                </CustomText>
              </InfoContainer>
              <InfoContainer>
                <CustomText type="regular" fontColor="dark">
                  Idade: {item.age}
                </CustomText>
              </InfoContainer>
              <InfoContainer>
                <CustomText type="regular" fontColor="dark">
                  Posição: {item.position}
                </CustomText>
              </InfoContainer>
            </PlayerContainer>
          )}
        />
      )}
    </Container>
  );
};

export default Players;
