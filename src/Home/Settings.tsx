import React, { useContext } from 'react';
import { View } from 'react-native';
import { AuthContext } from '../Authentication/authContext';
import { Button, Text } from '../components/';

const SettingsScreen = () => {
  const { dispatch } = useContext(AuthContext);
  const logout = () => {
    dispatch({
      type: 'LOGOUT',
    });
  };
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
      <Button label="logout" variant="primary" onPress={logout} />
    </View>
  );
};

export default SettingsScreen;
