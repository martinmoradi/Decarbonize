import React from 'react';
import { ScrollView, View, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import { Box, useTheme } from '../../components';
import { EmissionsPieIOS, EmissionsPieAndroid } from './components';

import Details from './components/Details';

const Dashboard = () => {
  const theme = useTheme();

  return (
    <ScrollView>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: theme.colors.secondary,
        }}
      ></View>
      <SafeAreaView>
        {Platform.OS === 'ios' ? <EmissionsPieIOS /> : <EmissionsPieAndroid />}
        <Box marginBottom="xl">
          <Details />
        </Box>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Dashboard;
