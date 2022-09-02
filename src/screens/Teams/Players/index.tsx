import React from 'react';

import { Header } from '../../../components';
import { PlayersProps } from '../../../routes/routes.stack';
import { Container, PlayerList } from './styles';

const Players: React.FC<PlayersProps> = ({ navigation, route }) => {
  const {
    params: { teamName },
  } = route;

  return (
    <Container>
      <Header label={teamName} back={() => navigation.goBack()} />
      {/* <PlayerList /> */}
    </Container>
  );
};

export default Players;
