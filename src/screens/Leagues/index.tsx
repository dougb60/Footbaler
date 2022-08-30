import React, { useEffect, useState } from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { SvgUri } from 'react-native-svg';

import { CustomText, Header } from '../../components';
import { APIResponse, LeaguesProps } from '../../global/interfaces';
import { LeagueTypes, useLeague } from '../../hooks/Leagues';
import { LeagueProps } from '../../routes/routes.stack';
import Api from '../../services/api';
import {
  Container,
  ContentContainer,
  LeagueList,
  Card,
  LeagueImage,
  LeagueInfoContainer,
  FlagContainer,
} from './styles';

const Ligas: React.FC<LeagueProps> = ({ navigation }) => {
  const { leagues, dispatch } = useLeague();

  const [imgLoading, setImgLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchLeagues() {
      const queryParams = `?season=${new Date().getFullYear()}&code=BR`;
      const rawData = await Api.get<APIResponse<LeaguesProps>>(
        `leagues${queryParams}`
      );
      const leagues = rawData.data.response;

      dispatch &&
        dispatch({
          type: LeagueTypes.SET_LEAGUE,
          payload: { leagues },
        });
    }

    fetchLeagues();
  }, []);

  return (
    <Container>
      <Header label="Ligas" />
      <ContentContainer>
        <LeagueList
          data={leagues}
          keyExtractor={({ league }) => {
            return league.id.toString() ?? '';
          }}
          renderItem={({ item: { league, country } }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('LeagueDetails');
                }}>
                <Card>
                  {imgLoading ? <ActivityIndicator color="red" /> : null}
                  <LeagueImage
                    onLoadStart={() => setImgLoading(true)}
                    onLoadEnd={() => setImgLoading(false)}
                    source={{ uri: league.logo }}
                    resizeMode="center"
                  />
                  <LeagueInfoContainer>
                    <CustomText type="bold" fontSize={18}>
                      {league.name}
                    </CustomText>
                  </LeagueInfoContainer>
                  <FlagContainer>
                    {country.flag && country.flag?.length > 0 && (
                      <SvgUri uri={country.flag} width={24} height={24} />
                    )}
                  </FlagContainer>
                </Card>
              </TouchableOpacity>
            );
          }}
        />
      </ContentContainer>
    </Container>
  );
};

export default Ligas;
