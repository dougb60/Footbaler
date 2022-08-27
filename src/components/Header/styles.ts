import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  justify-content: center;
  padding: ${RFValue(10)}px;
  height: ${RFPercentage(8)}px;
  background-color: ${({ theme }) => theme.colors.greenBackground};
`;

export const LabelContainer = styled.View`
  display: flex;
  align-items: flex-start;
`;

export const SearchContainer = styled.View`
  display: flex;
  align-items: flex-end;
`;
