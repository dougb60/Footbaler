import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
  Entypo,
} from '@expo/vector-icons';
import React, { useMemo } from 'react';
import { ActivityIndicator } from 'react-native-paper';

import { CustomText, Header } from '../../../components';
import theme from '../../../global/styles/theme';
import { useTeams } from '../../../hooks/teams';
import { VenueProps } from '../../../routes/routes.stack';
import {
  Container,
  ContentContainer,
  VenueImage,
  InfoContainer,
} from './styles';

const Venues: React.FC<VenueProps> = ({ navigation, route }) => {
  const { teams, selectedId } = useTeams();
  const venue = useMemo(() => {
    return teams?.find((team) => team.team.id === selectedId)?.venue;
  }, [selectedId]);

  const {
    params: { teamName },
  } = route;

  return (
    <Container>
      {!venue ? (
        <ActivityIndicator color="red" />
      ) : (
        <>
          <Header label={teamName} back={() => navigation.goBack()} />
          <VenueImage source={{ uri: venue.image }} resizeMode="cover" />
          <ContentContainer>
            <InfoContainer>
              <MaterialCommunityIcons
                name="stadium-variant"
                size={24}
                color={theme.colors.greenField}
                style={{ marginRight: 12 }}
              />
              <CustomText type="medium" fontColor="dark">
                {venue.name}
              </CustomText>
            </InfoContainer>
            <InfoContainer>
              <MaterialIcons
                name="airline-seat-recline-normal"
                size={24}
                color={theme.colors.greenField}
                style={{ marginRight: 12 }}
              />
              <CustomText type="medium" fontColor="dark">
                {venue.capacity} cap.
              </CustomText>
            </InfoContainer>
            <InfoContainer>
              <FontAwesome5
                name="city"
                size={20}
                color={theme.colors.greenField}
                style={{ marginRight: 12 }}
              />
              <CustomText type="medium" fontColor="dark">
                {venue.city}
              </CustomText>
            </InfoContainer>
            <InfoContainer>
              <Entypo
                name="address"
                size={24}
                color={theme.colors.greenField}
                style={{ marginRight: 12 }}
              />
              <CustomText type="medium" fontColor="dark">
                {venue.address}
              </CustomText>
            </InfoContainer>
          </ContentContainer>
        </>
      )}
    </Container>
  );
};

export default Venues;
