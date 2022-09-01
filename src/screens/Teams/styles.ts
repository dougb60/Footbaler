import { Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.greenField};
`;

export const ContentContainer = styled.View`
  flex: 1;
  margin: ${RFValue(42)}px ${RFValue(12)}px ${RFValue(12)}px;
`;

export const InfoContainer = styled.View`
  display: flex;
  align-items: center;
`;

export const TeamImage = styled(Image)`
  margin-bottom: ${RFValue(12)}px;
`;

export const TeamInfoContainer = styled.View`
  display: flex;
  align-items: center;
  margin-bottom: ${RFValue(8)}px;
`;
