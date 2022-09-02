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
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const ImageContainer = styled.View`
  display: flex;
  align-items: center;
  margin: ${RFValue(32)}px;
`;

export const MainInfoContainer = styled.View`
  margin-bottom: ${RFValue(42)}px; ;
`;

export const InfoContainer = styled.View`
  display: flex;
  align-items: center;
`;

export const TeamImage = styled(Image)`
  width: ${RFValue(82)}px;
  height: ${RFValue(82)}px;
`;

export const TeamInfoContainer = styled.View`
  display: flex;
  align-items: center;
  margin-bottom: ${RFValue(8)}px;
`;

export const MainButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const ButtonContainer = styled.View`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: ${RFValue(8)}px;
`;
