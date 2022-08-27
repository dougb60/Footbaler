import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.greenField};
`;

export const Header = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${RFPercentage(30)}px;
  margin-bottom: ${RFPercentage(4)}px;
`;

export const Body = styled.View`
  margin: 0 ${RFPercentage(4)}px;
`;
