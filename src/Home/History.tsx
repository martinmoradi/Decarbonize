import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Box } from '../components';
import { Dimensions } from 'react-native';
import HistoryGraph from '../components/HistoryGraph';

const { width, height } = Dimensions.get('window');

const HistoryScreen = () => {
  return (
    <ScrollView>
      <View style={{ alignItems: 'center', marginTop: height / 20 }}>
        <Box
          alignItems="center"
          style={{ width: width, borderRadius: 10, paddingLeft:30 }}
          justifyContent="center"
          backgroundColor="primary"
        >
          <HistoryGraph />
        </Box>
        <Box
          marginTop="s"
          paddingTop="m"
          style={{ width: width, borderRadius: 10 }}
          justifyContent="center"
          backgroundColor="info"
        >
          <Text variant="title3" color="white" margin="s">
            Ton historique :
          </Text>
          <Box
            alignItems="center"
            style={{ width: width, height: 50, borderBottomWidth: 2 }}
            justifyContent="center"
            backgroundColor="primary"
            borderBottomColor="white"
          >
            <Text variant="title3" color="white">
              Semaine 1 - CO2 - Score
            </Text>
          </Box>
          <Box
            alignItems="center"
            style={{ width: width, height: 50, borderBottomWidth: 2 }}
            justifyContent="center"
            backgroundColor="primary"
            borderBottomColor="white"
          >
            <Text variant="title3" color="white">
              Semaine 2 - CO2 - Score
            </Text>
          </Box>
          <Box
            alignItems="center"
            style={{ width: width, height: 50, borderBottomWidth: 2 }}
            justifyContent="center"
            backgroundColor="primary"
            borderBottomColor="white"
          >
            <Text variant="title3" color="white">
              Semaine 3 - CO2 - Score
            </Text>
          </Box>
          <Box
            alignItems="center"
            style={{ width: width, height: 50, borderBottomWidth: 2 }}
            justifyContent="center"
            backgroundColor="primary"
            borderBottomColor="white"
          >
            <Text variant="title3" color="white">
              Semaine 4 - CO2 - Score
            </Text>
          </Box>
          <Box
            alignItems="center"
            style={{ width: width, height: 50, borderBottomWidth: 2 }}
            justifyContent="center"
            backgroundColor="primary"
            borderBottomColor="white"
          >
            <Text variant="title3" color="white">
              Semaine 5 - CO2 - Score
            </Text>
          </Box>
          <Box
            alignItems="center"
            style={{ width: width, height: 50, borderBottomWidth: 2 }}
            justifyContent="center"
            backgroundColor="primary"
            borderBottomColor="white"
          >
            <Text variant="title3" color="white">
              Semaine 6 - CO2 - Score
            </Text>
          </Box>
        </Box>
      </View>
    </ScrollView>
  );
};

export default HistoryScreen;
