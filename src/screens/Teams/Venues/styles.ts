import { ImageBackground } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.greenField};
`;

export const ContentContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const InfoContainer = styled.View`
  display: flex;
  flex-wrap: wrap;
  margin: ${RFValue(12)}px;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;

export const VenueImage = styled(ImageBackground)`
  display: flex;
  align-self: center;
  width: ${RFPercentage(55)}px;
  height: ${RFPercentage(40)}px;
`;
