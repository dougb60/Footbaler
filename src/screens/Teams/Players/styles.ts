import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.greenField};
`;

export const PlayerList = styled(FlatList)`
  background-color: ${({ theme }) => theme.colors.shape};
`;
