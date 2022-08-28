import { FontAwesome } from '@expo/vector-icons/';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import theme from '../../global/styles/theme';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${RFValue(10)}px;
  height: ${RFPercentage(8)}px;
  background-color: ${({ theme }) => theme.colors.greenBackground};
`;

export const LabelContainer = styled.View`
  display: flex;
  align-items: flex-start;
`;

export const BackContainer = styled.View`
  display: flex;
  margin-right: 32px;
`;

export const BackIcon = styled(FontAwesome).attrs({
  name: 'angle-left',
  color: theme.colors.shape,
  size: 24,
})``;

export const SearchContainer = styled.View`
  display: flex;
  align-items: flex-end;
`;
