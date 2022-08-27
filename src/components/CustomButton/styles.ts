import { PressableProps } from 'react-native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ButtonProps extends PressableProps {
  padding?: { x: number; y: number };
  margin?: { x: number; y: number };
  backgroundColor?: string;
  borderRadius?: number;
}

export const CustomButton = styled.TouchableOpacity<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) =>
    props.padding
      ? `${RFValue(props.padding.y)}px ${RFPercentage(props.padding.x)}px`
      : `${RFValue(25)}px ${RFValue(25)}px`};

  margin: ${(props) =>
    props.margin
      ? `${RFValue(props.margin.y)}px ${RFPercentage(props.margin.x)}px`
      : `${RFValue(1)}px ${RFValue(1)}px`};

  background-color: ${(props) =>
    props.backgroundColor ?? props.theme.colors.success};

  border-radius: ${(props) => `${props.borderRadius}px` ?? 0};
`;
