import React from 'react';
import { Button, Text, View } from 'react-native';
import { AuthNavigationProps } from '../components/Navigation';

const AuthScreen = ({ navigation }: AuthNavigationProps<'Auth'>) => {

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#A9EFD2',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Register et Login</Text>
      <Button title="go to Dashboard" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default AuthScreen;
