import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Box } from '../../components';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Dimensions } from 'react-native';
import HistoryGraph from './components/HistoryGraph';

const { width, height } = Dimensions.get('window');

const History = () => {
  return (
    <ScrollView>
      <View style={styles.viewContainer}>
        <Box
          alignItems="center"
          style={styles.boxGraph}
          justifyContent="center"
          backgroundColor="lightgray"
        >
          <HistoryGraph />
        </Box>
        <Box
          marginTop="s"
          paddingTop="m"
          style={{ width: width, borderRadius: 10 }}
          justifyContent="center"
          backgroundColor="white"
        >
          <Text variant="title3" margin="s">
            Ton historique :
          </Text>
          <Box
            alignItems="center"
            style={styles.boxStyle}
            justifyContent="center"
            backgroundColor="lightgray"
            borderBottomColor="white"
          >
            <Text variant="title3">Semaine 1 - CO2 - Score</Text>
          </Box>
          <Box
            alignItems="center"
            style={styles.boxStyle}
            justifyContent="center"
            backgroundColor="lightgray"
            borderBottomColor="white"
          >
            <Text variant="title3">Semaine 2 - CO2 - Score</Text>
          </Box>
          <Box
            alignItems="center"
            style={styles.boxStyle}
            justifyContent="center"
            backgroundColor="lightgray"
            borderBottomColor="white"
          >
            <Text variant="title3">Semaine 3 - CO2 - Score</Text>
          </Box>
          <Box
            alignItems="center"
            style={styles.boxStyle}
            justifyContent="center"
            backgroundColor="lightgray"
            borderBottomColor="white"
          >
            <Text variant="title3">Semaine 4 - CO2 - Score</Text>
          </Box>
          <Box
            alignItems="center"
            style={styles.boxStyle}
            justifyContent="center"
            backgroundColor="lightgray"
            borderBottomColor="white"
          >
            <Text variant="title3">Semaine 5 - CO2 - Score</Text>
          </Box>
          <Box
            alignItems="center"
            style={styles.boxStyle}
            justifyContent="center"
            backgroundColor="lightgray"
            borderBottomColor="white"
          >
            <Text variant="title3">Semaine 6 - CO2 - Score</Text>
          </Box>
        </Box>
      </View>
    </ScrollView>
  );
};

export default History;

const styles = StyleSheet.create({
  viewContainer: {
    alignItems: 'center',
    backgroundColor: '#39D697',
  },
  boxGraph: {
    marginTop: height / 20,
    width: wp('95%'),
    borderRadius: 10,
    paddingLeft: 30,
  },
  boxStyle: {
    width: width,
    height: 50,
    borderBottomWidth: 2,
  },
});
