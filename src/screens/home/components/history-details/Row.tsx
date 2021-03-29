import React from 'react';
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Box } from '../../../../components';
import Cell from './Cell';
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
