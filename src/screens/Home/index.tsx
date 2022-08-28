import React from 'react';

import { CustomText, CustomButton } from '../../components';
import theme from '../../global/styles/theme';
import { HomeProps } from '../../routes/routes.stack';
import { Container, Header, Body } from './styles';

const Home: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <Container>
      <Header>
        <CustomText type="bold" fontColor={theme.colors.shape} fontSize={26}>
          Footballer
        </CustomText>
      </Header>
      <Body>
        <CustomButton
          onPress={() => navigation.navigate('TabLeague', { screen: 'League' })}
          borderRadius={6}
          backgroundColor={theme.colors.greenBackground}
          padding={{ x: 0, y: 42 }}>
          <CustomText type="bold" fontSize={24} fontColor={theme.colors.shape}>
            Ligas
          </CustomText>
        </CustomButton>
        <CustomButton
          margin={{ x: 0, y: 12 }}
          padding={{ x: 0, y: 42 }}
          backgroundColor={theme.colors.greenBackground}
          borderRadius={6}>
          <CustomText type="bold" fontSize={24} fontColor={theme.colors.shape}>
            Times
          </CustomText>
        </CustomButton>
        <CustomButton
          padding={{ x: 0, y: 42 }}
          backgroundColor={theme.colors.greenBackground}
          borderRadius={6}>
          <CustomText type="bold" fontSize={24} fontColor={theme.colors.shape}>
            Jogadores
          </CustomText>
        </CustomButton>
      </Body>
    </Container>
  );
};

export default Home;
