import React from 'react';
import { View } from 'react-native';
import { Text } from '../components/Theme';

const EngagementsScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#A9EFD2',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text variant="title2">Engagements et trophées</Text>
    </View>
  );
};

export default EngagementsScreen;
