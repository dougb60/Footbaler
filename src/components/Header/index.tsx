import React from 'react';

import theme from '../../global/styles/theme';
import CustomText from '../CustomText';
import { Container, LabelContainer, SearchContainer } from './styles';

interface HeaderProps {
  label: string;
  search?: boolean;
}

const Header: React.FC<HeaderProps> = ({ label, search }) => {
  return (
    <Container>
      <LabelContainer>
        <CustomText type="medium" fontSize={20} fontColor={theme.colors.shape}>
          {label}
        </CustomText>
      </LabelContainer>
      <SearchContainer></SearchContainer>
    </Container>
  );
};

export default Header;
