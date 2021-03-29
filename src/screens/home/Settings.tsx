import React from 'react';
import { View } from 'react-native';
import { useActions } from '../../hooks';
import { Button, Text } from '../../components';
import { SettingsStackNavigationProps } from '../../routers/NavigationTypes';
import { ButtonDanger, ButtonSecondary } from '../../components/Button';

const SettingsScreen = ({ navigation }: SettingsStackNavigationProps<'Settings'>) => {
  const { logout, deleteUser } = useActions();

  const handleDeleteUser = () => {
    deleteUser();
    logout();
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
      <Button label="Logout" variant="primary" onPress={() => logout()} style={{ margin: 5 }} />
      <Button
        label="Change fixed emissions"
        variant="primary"
        style={{ margin: 5 }}
        onPress={() => navigation.navigate('SettingsEmission')}
      />
      <ButtonDanger
        variant="default"
        label="Delete Account"
        onPress={() => handleDeleteUser()}
        style={{ width: 140, margin: 5 }}
      />
    </View>
  );
};

export default SettingsScreen;
