import { ScrollView } from 'react-native';
import { DataTable } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import theme from '../../global/styles/theme';

export const ScrollVertical = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false,
})``;

export const TableHeader = styled(DataTable.Header)`
  align-items: center;
  height: ${RFValue(50)}px;

  border: none;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const TableContent = styled(DataTable.Row)`
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom-color: ${({ theme }) => theme.colors.dark};
`;

export const TableTitle = styled(DataTable.Title).attrs({
  textStyle: {
    fontFamily: theme.fonts.medium,
    fontSize: RFValue(14),
    color: theme.colors.title,
    textAlign: 'left',
  },
})``;
