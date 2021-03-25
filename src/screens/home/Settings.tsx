import React from 'react';
import { View } from 'react-native';
import { useActions } from '../../hooks';
import { Button, Text } from '../../components';
import { SettingsStackNavigationProps } from '../../routers/NavigationTypes';

const SettingsScreen = ({ navigation }: SettingsStackNavigationProps<'Settings'>) => {
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
      <Button label="logout" variant="primary" onPress={() => logout()} style={{ margin: 5 }} />
      <Button
        label="Change fixed emissions"
        variant="primary"
        style={{ margin: 5 }}
        onPress={() => navigation.navigate('SettingsEmission')}
      />


    </View>
  );
};

export default SettingsScreen;
