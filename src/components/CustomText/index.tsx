import React from 'react';
import { TextProps } from 'react-native';

import theme from '../../global/styles/theme';

import { RegularText, MediumText, BoldText } from './styles';

interface CustomTextProps extends TextProps {
  type: 'regular' | 'medium' | 'bold';
  fontSize?: number;
  fontColor?: keyof typeof theme.colors;
}

const CustomText: React.FC<CustomTextProps> = ({
  type,
  children,
  fontSize,
  fontColor,
  ...rest
}) => {
  const textType = {
    regular: (
      <RegularText
        size={fontSize}
        color={theme.colors[fontColor ?? 'text']}
        {...rest}>
        {children}
      </RegularText>
    ),
    medium: (
      <MediumText
        size={fontSize}
        color={theme.colors[fontColor ?? 'text']}
        {...rest}>
        {children}
      </MediumText>
    ),
    bold: (
      <BoldText
        size={fontSize}
        color={theme.colors[fontColor ?? 'text']}
        {...rest}>
        {children}
      </BoldText>
    ),
  };

  return textType[type];
};

export default CustomText;
