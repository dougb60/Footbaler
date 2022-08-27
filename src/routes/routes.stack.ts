import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Ligas: undefined;
};

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
