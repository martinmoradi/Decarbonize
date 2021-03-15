import React from 'react';
import { SafeAreaView, Text } from 'react-native';

export interface Props {
  name: string;
}

const HelloWorld: React.FC<Props> = ({ name }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={{ justifyContent: 'center' }}>Hello {name} !</Text>
    </SafeAreaView>
  );
};

export default HelloWorld;
