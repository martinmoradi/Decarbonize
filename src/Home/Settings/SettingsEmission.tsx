import React from 'react';
import { Button, Text, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const SettingsEmission = ({ navigation }) => {
  const height = wp('100%');
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', height: height }}>
      <Text>Hello</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default SettingsEmission;
