// @ts-nocheck
import React, { useContext } from 'react';
import { View } from 'react-native';
import { AuthContext } from '../../App';
import { Button, Text } from '../components/';

const SettingsScreen = ({ navigation }) => {
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
