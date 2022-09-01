import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  League: undefined;
  LeagueDetails: undefined;
  Teams: undefined;
  TabLeague: NavigatorScreenParams<{
    League: undefined;
    LeagueDetails: undefined;
  }>;
};

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type LeagueProps = NativeStackScreenProps<
  RootStackParamList,
  'League' | 'TabLeague'
>;
export type LeagueDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  'LeagueDetails'
>;

export type TeamsProps = NativeStackScreenProps<RootStackParamList, 'Teams'>;
