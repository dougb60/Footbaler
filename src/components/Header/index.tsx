import React from 'react';
import { TouchableOpacity } from 'react-native';

import theme from '../../global/styles/theme';
import CustomText from '../CustomText';
import {
  Container,
  LabelContainer,
  SearchContainer,
  BackContainer,
  BackIcon,
} from './styles';

interface HeaderProps {
  label: string;
  search?: boolean;
  back?: () => void;
}

const Header: React.FC<HeaderProps> = ({ label, search, back }) => {
  return (
    <Container>
      {back && (
        <TouchableOpacity
          onPress={back}
          hitSlop={{ bottom: 12, left: 12, right: 12, top: 12 }}>
          <BackContainer>
            <BackIcon />
          </BackContainer>
        </TouchableOpacity>
      )}
      <LabelContainer>
        <CustomText type="medium" fontSize={20} fontColor="shape">
          {label}
        </CustomText>
      </LabelContainer>
      <SearchContainer></SearchContainer>
    </Container>
  );
};

export default Header;
