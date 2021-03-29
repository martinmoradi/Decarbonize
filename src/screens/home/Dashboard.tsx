import React from 'react';
import { Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { Box, useTheme } from '../../components';
import { EmissionsPieAndroid, EmissionsPieIOS } from './components';
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
