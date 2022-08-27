import React from 'react';
import { TextProps } from 'react-native';

import { RegularText, MediumText, BoldText } from './styles';

interface CustomTextProps extends TextProps {
  type: 'regular' | 'medium' | 'bold';
  fontSize?: number;
  fontColor?: string;
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
      <RegularText size={fontSize} color={fontColor} {...rest}>
        {children}
      </RegularText>
    ),
    medium: (
      <MediumText size={fontSize} color={fontColor} {...rest}>
        {children}
      </MediumText>
    ),
    bold: (
      <BoldText size={fontSize} color={fontColor} {...rest}>
        {children}
      </BoldText>
    ),
  };

  return textType[type];
};

export default CustomText;
