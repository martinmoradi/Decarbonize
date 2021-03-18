import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Box, Button, Text } from '../components';
import { AuthNavigationProps } from '../components/Navigation';

const picture = {
  src: require('../components/assets/patterns/2.png'),
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});

export const assets = [picture.src];
const Welcome = ({ navigation }: AuthNavigationProps<'Welcome'>) => {
  return (
    <Box flex={1} backgroundColor="background">
      <ImageBackground source={picture.src} style={styles.image}>
        <Box flex={1} borderBottomRightRadius="xl" alignItems="center" justifyContent="center">
          <Text variant="titleX" style={{ marginBottom: 20 }}>
            Decarbonize
          </Text>
          <Text color={'white'} variant="title2">
            Your carbon emissions manager
          </Text>
        </Box>
        <Box flex={1} borderTopLeftRadius="xl">
          <Box position="absolute" top={0} left={0} right={0} bottom={0}></Box>

          <Box
            backgroundColor="background"
            borderTopLeftRadius="xl"
            borderTopRightRadius="xl"
            borderBottomRightRadius="xl"
            borderBottomLeftRadius="xl"
            justifyContent="space-evenly"
            alignItems="center"
            flex={1}
            padding="l"
          >
            <Text variant="title2">Let’s get started</Text>
            <Text variant="body" textAlign="center">
              Answer a few questions about your carbon emissions to create your account (it's all
              free)
            </Text>
            <Button
              variant="primary"
              label="Let's go !"
              onPress={() => navigation.navigate('Onboarding')}
            />

            <BorderlessButton onPress={() => navigation.navigate('Login')}>
              <Text variant="button" color="info">
                I already have an account
              </Text>
            </BorderlessButton>
          </Box>
        </Box>
      </ImageBackground>
    </Box>
  );
};

export default Welcome;
