import React from 'react';
import { View } from 'react-native';
import { useActions } from '../../hooks';
import { Button, Text } from '../../components';

const Settings = () => {
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
    </View>
  );
};

export default Settings;