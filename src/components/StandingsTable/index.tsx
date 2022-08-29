import React from 'react';
import { Image } from 'react-native';
import { DataTable } from 'react-native-paper';

import { StandingProps } from '../../global/interfaces';
import {
  ScrollVertical,
  TableContent,
  TableHeader,
  TableTitle,
} from './styles';

const Standings: React.FC<StandingProps> = ({ standings }) => {
  return (
    <DataTable>
      <TableHeader>
        <TableTitle style={{ flex: 1 }}>Clube</TableTitle>
        <TableTitle numeric>PJ</TableTitle>
        <TableTitle numeric>PTS</TableTitle>
        <TableTitle numeric>VIT</TableTitle>
        <TableTitle numeric>E</TableTitle>
        <TableTitle numeric>DER</TableTitle>
      </TableHeader>
      <ScrollVertical>
        {standings.map((prop) => (
          <TableContent key={prop.team.id}>
            <DataTable.Cell>
              <Image
                source={{
                  uri: prop.team.logo ?? '',
                }}
                style={{
                  width: 28,
                  height: 28,
                }}
              />
            </DataTable.Cell>
            <DataTable.Cell numeric>{prop.all.played}</DataTable.Cell>
            <DataTable.Cell numeric>{prop.points}</DataTable.Cell>
            <DataTable.Cell numeric>{prop.all.win}</DataTable.Cell>
            <DataTable.Cell numeric>{prop.all.draw}</DataTable.Cell>
            <DataTable.Cell numeric>{prop.all.lose}</DataTable.Cell>
          </TableContent>
        ))}
      </ScrollVertical>
    </DataTable>
  );
};

export default Standings;
