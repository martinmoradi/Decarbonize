import React from 'react';
import { View } from 'react-native';
import { Text } from '../components/Theme';

const DashboardScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text variant="title2">Dashboard</Text>
    </View>
  );
};

export default DashboardScreen;
