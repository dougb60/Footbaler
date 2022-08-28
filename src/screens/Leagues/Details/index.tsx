import React from 'react';

import { Header } from '../../../components/';
import { LeagueDetailsProps } from '../../../routes/routes.stack';
import { Container } from './styles';

const Details: React.FC<LeagueDetailsProps> = ({ navigation }) => {
  return (
    <Container>
      <Header label="Detalhes da liga" back={() => navigation.goBack()} />
    </Container>
  );
};

export default Details;
