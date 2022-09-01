import React from 'react';
// import { Header } from 'react-native/Libraries/NewAppScreen';

import { CustomText, Header } from '../../components/';
import { TeamsProps } from '../../routes/routes.stack';
import {
  Container,
  ContentContainer,
  InfoContainer,
  TeamImage,
  TeamInfoContainer,
} from './styles';

const Teams: React.FC<TeamsProps> = ({ navigation }) => {
  return (
    <Container>
      <Header label="Corinthians" back={() => navigation.goBack()} />
      <ContentContainer>
        <TeamImage source={{ uri: '' }} />
        <InfoContainer>
          <TeamInfoContainer>
            <CustomText type="medium" fontColor="shape">
              Corinthians
            </CustomText>
          </TeamInfoContainer>
          <TeamInfoContainer>
            <CustomText type="medium" fontColor="shape">
              Fundação: 1910
            </CustomText>
          </TeamInfoContainer>
        </InfoContainer>
      </ContentContainer>
    </Container>
  );
};

export default Teams;
