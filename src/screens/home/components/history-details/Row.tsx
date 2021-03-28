import React from 'react';
import Cell from './Cell';
import { Box } from '../../../../components';
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
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
    marginLeft: wp(8),
  },
});
