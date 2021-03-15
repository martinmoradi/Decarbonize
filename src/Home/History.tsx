import React from 'react';
import { View } from 'react-native';
import { Text } from '../components/Theme';

const HistoryScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#A9EFD2',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text variant="title2">Historique des consommations</Text>
    </View>
  );
};

export default HistoryScreen;
