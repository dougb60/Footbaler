import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  League: undefined;
  LeagueDetails: undefined;
  Teams: { teamId: number };
  Venue: { teamName: string };
  Players: { teamName: string };
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
export type VenueProps = NativeStackScreenProps<RootStackParamList, 'Venue'>;
export type PlayersProps = NativeStackScreenProps<
  RootStackParamList,
  'Players'
>;
