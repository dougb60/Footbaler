import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.greenField};
`;

export const ContentContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin: ${RFValue(42)}px ${RFValue(12)}px ${RFValue(150)}px;
`;
