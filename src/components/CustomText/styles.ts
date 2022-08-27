/* eslint-disable prettier/prettier */
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface TextProps {
  size?: number;
  color?: string;
}

export const RegularText = styled.Text<TextProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${(props) =>
    props.size ? `${RFValue(props.size)}px` : `${RFValue(12)}px`};
  color: ${(props) => (props.color ? props.color : props.theme.colors.text)};
`;

export const MediumText = styled.Text<TextProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${(props) =>
    props.size ? `${RFValue(props.size)}px` : `${RFValue(16)}px`};
  color: ${(props) => (props.color ? props.color : props.theme.colors.text)};
`;

export const BoldText = styled.Text<TextProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${(props) =>
    props.size ? `${RFValue(props.size)}px` : `${RFValue(18)}px`};
  color: ${(props) => (props.color ? props.color : props.theme.colors.title)};
`;
