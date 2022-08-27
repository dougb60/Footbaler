/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { CustomButton } from './styles';

interface StyledButtonProps extends TouchableOpacityProps {
  padding?: { x: number; y: number };
  margin?: { x: number; y: number };
  backgroundColor?: string;
  borderRadius?: number;
}

const StyledButton: React.FC<StyledButtonProps> = ({
  padding,
  margin,
  backgroundColor,
  children,
  borderRadius,
  ...rest
}) => {
  return (
    <CustomButton
      padding={padding}
      backgroundColor={backgroundColor}
      margin={margin}
      borderRadius={borderRadius}
      {...rest}>
      {children}
    </CustomButton>
  );
};

export default StyledButton;
