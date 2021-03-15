import React from 'react';
import {View, Text, Button } from 'react-native';
import { AuthNavigationProps } from '../components/Navigation';


const OnboardingScreen = ( {navigation}: AuthNavigationProps< "Onboarding">) => {
    return <View style={{flex:1, backgroundColor:"#A9EFD2", justifyContent: "center", alignItems: "center" }}>
    <Text>Questionnaire emissions fixes</Text>
    <Button title="go to Auth" onPress={()=> navigation.navigate("Auth")}/>
    </View>
}

export default OnboardingScreen