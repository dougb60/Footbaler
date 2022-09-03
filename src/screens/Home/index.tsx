import React, { useEffect } from 'react';

import { fetchLeagues } from '../../actions/leagues';
import { CustomText, CustomButton } from '../../components';
import theme from '../../global/styles/theme';
import { useLeague } from '../../hooks/leagues';
import { HomeProps } from '../../routes/routes.stack';
import { Container, Header, Body } from './styles';

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const { dispatch } = useLeague();

  useEffect(() => {
    fetchLeagues(dispatch!);
  }, [dispatch]);

  return (
    <Container>
      <Header>
        <CustomText type="bold" fontColor="shape" fontSize={26}>
          Footballer
        </CustomText>
      </Header>
      <Body>
        <CustomButton
          onPress={() => navigation.navigate('Leagues', { screen: 'League' })}
          borderRadius={6}
          backgroundColor="greenBackground"
          margin={{ x: 0, y: 42 }}
          padding={{ x: 0, y: 24 }}>
          <CustomText type="bold" fontSize={18} fontColor="shape">
            Ver ligas Ativas BR
          </CustomText>
        </CustomButton>
      </Body>
    </Container>
  );
};

export default Home;
