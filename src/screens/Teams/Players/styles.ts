import { FlatList, FlatListProps, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { FlatPlayers } from '../../../global/interfaces';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.greenField};
`;

export const TotalPlayersContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

export const PlayersList = styled(
  FlatList as new (props: FlatListProps<FlatPlayers>) => FlatList<FlatPlayers>
).attrs({ showsVerticalScrollIndicator: false })`
  background-color: ${({ theme }) => theme.colors.greenField};
`;

export const PlayerImage = styled(Image)`
  width: ${RFValue(52)}px;
  height: ${RFValue(52)}px;
`;

export const PlayerContainer = styled.View`
  padding: ${RFValue(12)}px ${RFValue(24)}px;
`;

export const InfoContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.shape};
  padding: 6px;
`;
