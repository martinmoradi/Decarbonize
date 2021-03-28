import React from 'react';
import Cell from './Cell';
import { Box } from '../../../../components';
import { StyleSheet } from 'react-native';

interface RowProps {
  column: string[];
}

const Row = ({ column }: RowProps) => {
  return (
    <Box style={styles.rowStyle}>
      {column.map((data, index) => (
        <Cell data={data} key={index} />
      ))}
    </Box>
  );
};

export default Row;

const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: 'row',
    marginLeft: 20,
  },
});
