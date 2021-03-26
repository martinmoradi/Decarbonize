import React, { useEffect } from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Box, Button, Text } from '../../components';
import { AuthNavigationProps } from '../../routers/NavigationTypes';
import { useTheme } from '../../components/Theme';
import { useActions, useTypedSelector } from '../../hooks';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
const { width, height} = Dimensions.get('window');
const picture = {
  src: require('../../components/assets/images/decarbonize-hero.png'),
  width: 920,
  height: 1100,
};
export const assets = [picture.src];

const Welcome = ({ navigation }: AuthNavigationProps<'Welcome'>) => {
  const theme = useTheme();
  const { loadUser } = useActions();
  const { user } = useTypedSelector(state => state.authentication);

  useEffect(() => {
    if (!user) {
      loadUser();
    }
  }, []);

  return (
    <Box flex={1} backgroundColor="background">
      <Box
        flex={2}
        borderBottomRightRadius="xl"
        backgroundColor="primary"
        alignItems="center"
        justifyContent="center"
      >
        <Text variant="heroHome" style={styles.title}>
          Decarbonize
        </Text>
        <Text variant="subHeroHome"> Your carbon emissions manager </Text>

        <Image
          source={picture.src}
          style={styles.image}
        />
      </Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box backgroundColor="primary" position="absolute" top={0} left={0} right={0} bottom={0} />

        <Box
          backgroundColor="background"
          borderTopLeftRadius="xl"
          justifyContent="space-evenly"
          alignItems="center"
          flex={1}
          padding="xl"
        >
          <Text variant="title2" style={styles.bottomMargin}>Let’s get started</Text>
          <Text variant="body" textAlign="center" style={styles.bottomMargin}>
            Answer a few questions about your carbon emissions to create your account (it's all
            free)
          </Text>
          <Button
            variant="primary"
            label="Let's go !"
            onPress={() => navigation.navigate('Onboarding')} style={styles.bottomMargin}
          />

          <BorderlessButton onPress={() => navigation.navigate('Login')}>
            <Text variant="button" color="info">
              Already have an account?
            </Text>
          </BorderlessButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
const styles = StyleSheet.create({
  title: {
    marginTop: wp("20%"), marginBottom: wp("2%")
  },
  image:{ 
    width: width,
    height: ((width - 75) * picture.height) / picture.width
  },
  bottomMargin: { marginBottom: 30}
});