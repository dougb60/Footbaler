import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import React, { Fragment, useEffect, useMemo } from 'react';
import { ActivityIndicator } from 'react-native';

import { fetchTeams } from '../../actions/teams';
import { CustomText, Header, CustomButton } from '../../components/';
import { useTeams } from '../../hooks/teams';
import { TeamsProps } from '../../routes/routes.stack';
import {
  Container,
  ContentContainer,
  InfoContainer,
  TeamImage,
  MainInfoContainer,
  TeamInfoContainer,
  ImageContainer,
  ButtonContainer,
  MainButtonContainer,
} from './styles';

const Teams: React.FC<TeamsProps> = ({ navigation, route }) => {
  const {
    params: { teamId },
  } = route;
  const { dispatch, teams } = useTeams();
  // @todo: change when there is more than one team
  const memoTeams = useMemo(() => {
    return teams ? teams.find((t) => t.team.id === teamId) : null;
  }, [teams]);

  useEffect(() => {
    fetchTeams(dispatch!, teamId);
  }, [teamId]);
  // console.log(memoTeams.team.logo);
  return (
    <Container>
      {!memoTeams ? (
        <ActivityIndicator color="red" />
      ) : (
        <>
          <Header
            label={memoTeams.team.name}
            back={() => navigation.goBack()}
          />
          <ContentContainer>
            <ImageContainer>
              <TeamImage
                source={{
                  uri: memoTeams.team.logo,
                }}
              />
            </ImageContainer>
            <MainInfoContainer>
              <InfoContainer>
                <TeamInfoContainer>
                  <CustomText type="medium" fontColor="dark">
                    {memoTeams.team.name}
                  </CustomText>
                </TeamInfoContainer>
                <TeamInfoContainer>
                  <CustomText type="medium" fontColor="dark">
                    Fundação: {memoTeams.team.founded}
                  </CustomText>
                </TeamInfoContainer>
              </InfoContainer>
            </MainInfoContainer>
            <MainButtonContainer>
              <ButtonContainer>
                <CustomButton
                  margin={{ x: 1, y: 6 }}
                  padding={{ x: 4, y: 26 }}
                  borderRadius={50}
                  backgroundColor="lightGreen"
                  onPress={() =>
                    navigation.push('Venue', { teamName: memoTeams.team.name })
                  }>
                  <MaterialCommunityIcons
                    name="stadium-variant"
                    size={24}
                    color="white"
                  />
                </CustomButton>
                <CustomText type="medium" fontColor="dark">
                  Estadio
                </CustomText>
              </ButtonContainer>
              <ButtonContainer>
                <CustomButton
                  margin={{ x: 1, y: 6 }}
                  padding={{ x: 4, y: 26 }}
                  borderRadius={50}
                  backgroundColor="lightGreen"
                  onPress={() =>
                    navigation.push('Players', {
                      teamName: memoTeams.team.name,
                    })
                  }>
                  <Entypo name="users" size={24} color="white" />
                </CustomButton>
                <CustomText type="medium" fontColor="dark">
                  Elenco
                </CustomText>
              </ButtonContainer>
            </MainButtonContainer>
          </ContentContainer>
        </>
      )}
    </Container>
  );
};

export default Teams;
