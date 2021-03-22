import React from 'react';
import { Dimensions, ScrollView, View } from 'react-native';
import { Box, Text } from '../components';
const { width, height } = Dimensions.get('window');

const NewTripScreen = () => {
  return (
    <ScrollView>
      <View style={{ alignItems: 'center', marginTop: height / 15 }}>
        <Box
          alignItems="center"
          style={{ width: width - 30, height: 100, borderRadius: 10 }}
          justifyContent="center"
          backgroundColor="primary"
        >
          <Text variant="title2" color="white">
            NEW TRIP SCREEN
          </Text>
        </Box>
        <Box
          marginTop="xl"
          paddingTop="m"
          style={{ width: width - 30, borderRadius: 10 }}
          justifyContent="center"
          backgroundColor="info"
        >
          <Text variant="title3" color="white" margin="s">
            Ton historique :
          </Text>
          <Box
            alignItems="center"
            style={{ width: width - 30, height: 50, borderBottomWidth: 2 }}
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
            style={{ width: width - 30, height: 50, borderBottomWidth: 2 }}
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
            style={{ width: width - 30, height: 50, borderBottomWidth: 2 }}
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
            style={{ width: width - 30, height: 50, borderBottomWidth: 2 }}
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
            style={{ width: width - 30, height: 50, borderBottomWidth: 2 }}
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
            style={{ width: width - 30, height: 50, borderBottomWidth: 2 }}
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

export default NewTripScreen;
