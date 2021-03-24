import React from 'react';
import { Box, Text } from '../../../components/Theme';
import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

interface TripHistoryProps {
  type: string;
  distance: number;
  amount: number;
  date: string;
}
const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

const TripHistory = (props: TripHistoryProps) => {

  return (
    <Box
      alignItems="center"
      style={styles.boxStyle}
      justifyContent="center"
      backgroundColor="lightgray"
      borderBottomColor="white"
    >
      <Text variant="body">On the <B>{new Date (Date.parse(props.date)).toLocaleDateString()}</B>,  by  {props.type}:  </Text>
      <Text variant="body">Distance: {props.distance}km, <B> {props.amount} kgCo2 emitted</B></Text>
    </Box>
  );
};

export default TripHistory;

const styles = StyleSheet.create({
  boxStyle: {
    width: width,
    height: 80,
    borderBottomWidth: 2,
  },
});
