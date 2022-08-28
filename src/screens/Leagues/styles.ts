import { FlatList, FlatListProps, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { LeaguesProps } from '../../global/interfaces';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.greenField};
`;

export const ContentContainer = styled.View`
  flex: 1;
  margin: ${RFValue(42)}px ${RFValue(12)}px ${RFValue(12)}px;
`;

export const Card = styled.View`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.background};
  margin-bottom: ${RFValue(12)}px;
  padding: ${RFValue(20)}px;

  border-radius: 5px;
`;

export const LeagueImage = styled(Image)`
  height: ${RFValue(58)}px;
  width: ${RFValue(58)}px;
`;

export const LeagueInfoContainer = styled.View`
  flex: 1;
  justify-content: center;
  margin-left: 16px;
`;

export const FlagContainer = styled.View`
  justify-content: center;
`;

export const LeagueList = styled(
  FlatList as new (props: FlatListProps<LeaguesProps>) => FlatList<LeaguesProps>
).attrs({ showsVerticalScrollIndicator: false })`
  background-color: ${({ theme }) => theme.colors.greenField};
`;
