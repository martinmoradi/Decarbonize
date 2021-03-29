import React from 'react';
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Box } from '../../../../components';
import Row from './Row';

const Grid = (carData: string[][]) => {
  return (
    <Box style={styles.gridContainer}>
      {carData.map((column, index) => (
        <Row column={column} key={column.length + index} />
      ))}
    </Box>
  );
};

export default Grid;

const styles = StyleSheet.create({
  gridContainer: {
    width: wp(60),
  },
});
