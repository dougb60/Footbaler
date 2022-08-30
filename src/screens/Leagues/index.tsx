import React, { useState } from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { SvgUri } from 'react-native-svg';

import { CustomText, Header } from '../../components';
import { useLeague } from '../../hooks/Leagues';
import { LeagueProps } from '../../routes/routes.stack';
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
  const { leagues } = useLeague();

  const [imgLoading, setImgLoading] = useState<boolean>(false);

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
