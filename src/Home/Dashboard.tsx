import React from 'react';
import { ScrollView } from 'react-native';
import { Text, Box, MeteoBar } from '../components';
import DashboardGraph from '../components/DashboardGraph';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const DashboardScreen = () => {

  return (
    <ScrollView>
      <Box style={{ alignItems: 'center' }}>
        <Box
          paddingLeft="m"
          justifyContent="flex-end"
          paddingBottom="m"
          style={{
            width: width,
            height: 210,
            borderBottomEndRadius: 20,
            borderBottomStartRadius: 20,
          }}
          backgroundColor="primary"
          marginBottom="s"
        >
          <MeteoBar/>
        </Box>

        <Box
          alignItems="center"
          style={{ borderRadius: 20, flex: 1, width: width }}
          justifyContent="center"
          backgroundColor="primary"
        >
          <DashboardGraph />
        </Box>
        <Box
          marginTop="s"
          paddingTop="m"
          marginBottom="s"

          style={{ width: width, height: 100, borderRadius: 20 }}
          justifyContent="center"
          backgroundColor="info"
        >
          <Text variant="title3" color="white" margin="s">
            Cette semaine :{' '}
          </Text>
          <Box
            alignItems="center"
            style={{ width: width, height: 80, borderRadius: 20 }}
            justifyContent="center"
            backgroundColor="primary"
          >
            <Text variant="title2" color="white">
              {' '}
              Food Boxes
            </Text>
          </Box>
        </Box>
        <Box
          marginTop="m"
          paddingTop="m"
          style={{ width: width, borderRadius: 20 }}
          justifyContent="center"
          backgroundColor="info"
        >
          <Text variant="title3" color="white" margin="s">
            Tes Trajets :{' '}
          </Text>
          <Box
            alignItems="center"
            style={{ width: width, height: 50, borderBottomWidth: 2 }}
            justifyContent="center"
            backgroundColor="primary"
            borderBottomColor="white"
          >
            <Text variant="title3" color="white">
              {' '}
              Trajet 1
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
              {' '}
              Trajet 2
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
              {' '}
              Trajet 3
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
              {' '}
              Trajet 4
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
              {' '}
              Trajet 5
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
              {' '}
              Trajet 6
            </Text>
          </Box>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default DashboardScreen;
