import React from 'react';
import { Image } from 'react-native';
import { DataTable } from 'react-native-paper';

import {
  ScrollVertical,
  TableHeader,
  TableContent,
  TableTitle,
} from './styles';

interface StandingProps {
  standingProps: {
    rank: number;
    points: number;
    team: { id: number; name: string; logo: string };
    all: { played: number; win: number; draw: number; lose: number };
  }[];
}

const Standings: React.FC<StandingProps> = ({ standingProps }) => {
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
        {standingProps.map((prop) => (
          <TableContent key={prop.team.id}>
            <DataTable.Cell>
              <Image
                source={{
                  uri: prop.team.logo,
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
