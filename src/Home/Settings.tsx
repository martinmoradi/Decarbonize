import React, { useContext } from 'react';
import { View } from 'react-native';
import { configDelete } from '../Authentication/api';
import { AuthContext } from '../Authentication/authContext';
import { authActionType } from '../Authentication/authContext/authTypes';
import { Button, Text } from '../components/';

const SettingsScreen = () => {
  const { state, dispatch } = useContext(AuthContext);
  const logout = () => {
    dispatch({
      type: authActionType.LOGOUT,
    });
  };

  const deleteAccount = async ()=>{
   const response = await fetch(`https://decarbonize-perruches.herokuapp.com/signup`, configDelete('DELETE', state.token))
   const { error } = await response.json();
   if(response.ok){
     dispatch({
      type: authActionType.LOGOUT,
    });
   }else{
     console.log("errorDeleteAccount", error)
   }
  }
  
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
      <Button label="delete account" variant="default" onPress={deleteAccount} />

    </View>
  );
};

export default SettingsScreen;
