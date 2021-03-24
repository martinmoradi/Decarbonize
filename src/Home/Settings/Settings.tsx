import React from 'react';
import { View } from 'react-native';
import { useActions } from '../../hooks';
import { Button, Text } from '../../components';

const SettingsScreen = ({ navigation }) => {
  const { logout } = useActions();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#A9EFD2',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text variant="title2">Settings</Text>
      <Button label="logout" variant="primary" onPress={() => logout()} />
      <Button
        label="Change fixed emissions"
        variant="primary"
        onPress={() => navigation.navigate('SettingsEmission')}
      />
    </View>
  );
};

export default SettingsScreen;
