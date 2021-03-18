import React from 'react';
import { Dimensions } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Box, Button, Text, useTheme } from '../components';
import { AuthNavigationProps } from '../components/Navigation';

const { width } = Dimensions.get('window');
// const picture = {
//   src: require('./assets/5.png'),
//   width: 3383,
//   height: 5074,
// };
// export const assets = [picture.src];
const Welcome = ({ navigation }: AuthNavigationProps<'Welcome'>) => {
  const theme = useTheme();
  return (
    <Box flex={1} backgroundColor="background">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="background2"
        alignItems="center"
        justifyContent="center" //previously flex-end
      >
        <Text variant="title1" style={{ marginBottom: 20 }}>
          Welcome to Decarbonize
        </Text>
        <Text variant="title3">Make the world a better place </Text>

        {/* <Image
          source={picture.src}
          style={{
            width: width - theme.borderRadii.xl,
            height: ((width - theme.borderRadii.xl) * picture.height) / picture.width,
          }}
        /> */}
      </Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box
          backgroundColor="background2"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        />

        <Box
          backgroundColor="background"
          borderTopLeftRadius="xl"
          justifyContent="space-evenly"
          alignItems="center"
          flex={1}
          padding="xl"
        >
          <Text variant="title2">Let’s get started</Text>
          <Text variant="body" textAlign="center">
            Answer a few questions about your carbon emissions to create your account (it's all
            free)
          </Text>
          <Button
            variant="primary"
            label="Create my account"
            onPress={() => navigation.navigate('Onboarding')}
          />
          <Text>Or</Text>
          <Button label="Login to your account" onPress={() => navigation.navigate('Login')} />

          <BorderlessButton onPress={() => navigation.navigate('ForgotPassword')}>
            <Text variant="button" color="secondary">
              Forgot password?
            </Text>
          </BorderlessButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
