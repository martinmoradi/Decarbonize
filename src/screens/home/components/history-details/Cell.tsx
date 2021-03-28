import React from 'react';
import { StyleSheet } from 'react-native';
import { Box, Text } from '../../../../components';

interface CellProps {
  data: string;
}
const Cell = ({ data }: CellProps) => {
  return (
    <Box style={styles.cellStyle}>
      <Text variant="body">{data}</Text>
    </Box>
  );
};

export default Cell;

const styles = StyleSheet.create({
  cellStyle: {
    flex: 1,
    marginVertical: 5,
  },
});
