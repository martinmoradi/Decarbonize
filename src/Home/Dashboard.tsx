import React from 'react';
import {  ScrollView } from 'react-native';
import { Text, Box, DashboardGraph } from '../components';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
const DashboardScreen = () => {

  return (
    <ScrollView>

    <Box style={{alignItems: "center"}}   >
      <Box paddingLeft="m" justifyContent="flex-end" paddingBottom="m" style={{width: width, height: 150, borderBottomEndRadius: 20, borderBottomStartRadius: 20}} backgroundColor="primary" marginBottom="m">
        <Text variant="title2" color="white" marginBottom="m">Good Morning !   ☀️</Text>
        <Text variant="body" color="white">It's Firday, temperature outside is 10°C</Text>

      </Box>
      
      <Box alignItems="center" style={{ borderRadius: 10, flex:1, width: width -30}} justifyContent="center" backgroundColor="primary">
         <DashboardGraph/>
      </Box>
      <Box marginTop="m" paddingTop="m" style={{width: width -30, height: 100, borderRadius: 10}} justifyContent="center" backgroundColor="info">
        <Text variant="title3" color="white" margin="s">Cette semaine : </Text>
          <Box alignItems="center" style={{width: width -30, height: 80, borderRadius: 10}} justifyContent="center" backgroundColor="primary">
            <Text variant="title2" color="white"> Food Boxes</Text>
          </Box>
      </Box>
      <Box marginTop="xl" paddingTop="m" style={{width: width -30, borderRadius: 10}} justifyContent="center" backgroundColor="info">
        <Text variant="title3" color="white" margin="s">Tes Trajets : </Text>
          <Box alignItems="center" style={{width: width -30, height: 50, borderBottomWidth: 2}} justifyContent="center" backgroundColor="primary" borderBottomColor="white" >
            <Text variant="title3" color="white"> Trajet 1</Text>
          </Box>
          <Box alignItems="center" style={{width: width -30, height: 50, borderBottomWidth: 2 }} justifyContent="center" backgroundColor="primary" borderBottomColor="white" >
            <Text variant="title3" color="white"> Trajet 2</Text>
          </Box>
          <Box alignItems="center" style={{width: width -30, height: 50, borderBottomWidth: 2}} justifyContent="center" backgroundColor="primary" borderBottomColor="white" >
            <Text variant="title3" color="white"> Trajet 3</Text>
          </Box>
          <Box alignItems="center" style={{width: width -30, height: 50, borderBottomWidth: 2}} justifyContent="center" backgroundColor="primary" borderBottomColor="white" >
            <Text variant="title3" color="white"> Trajet 4</Text>
          </Box>
          <Box alignItems="center" style={{width: width -30, height: 50, borderBottomWidth: 2 }} justifyContent="center" backgroundColor="primary" borderBottomColor="white" >
            <Text variant="title3" color="white"> Trajet 5</Text>
          </Box>
          <Box alignItems="center" style={{width: width -30, height: 50, borderBottomWidth: 2}} justifyContent="center" backgroundColor="primary" borderBottomColor="white" >
            <Text variant="title3" color="white"> Trajet 6</Text>
          </Box>
      </Box>
    </Box>
    </ScrollView>

  );
};

export default DashboardScreen;
