import React from 'react';
import { useActions } from '../../hooks';
import { Button, Text, Box, useTheme, Container } from '../../components';
import { SettingsStackNavigationProps } from '../../routers/NavigationTypes';
import { ButtonDanger, ButtonSecondary } from '../../components/Button';
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const SettingsScreen = ({ navigation }: SettingsStackNavigationProps<'Settings'>) => {
  const { logout, deleteUser } = useActions();
  const theme = useTheme();

  const handleDeleteUser = () => {
    deleteUser();
    logout();
  };

  // return (
  //   <View
  //     style={{
  //       flex: 1,
  //       backgroundColor: '#A9EFD2',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //     }}
  //   >
  //     <Text variant="title2">Settings</Text>
  //     <Button label="Logout" variant="primary" onPress={() => logout()} style={{ margin: 5 }} />
  //     <Button
  //       label="Change fixed emissions"
  //       variant="primary"
  //       style={{ margin: 5 }}
  //       onPress={() => navigation.navigate('SettingsEmission')}
  //     />
  //     <ButtonDanger
  //       variant="default"
  //       label="Delete Account"
  //       onPress={() => handleDeleteUser()}
  //       style={{ width: 140, margin: 5 }}
  //     />
  //   </View>
  // );

  return (
    <Box style={{ flex: 1 }}>
      <Box
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: theme.colors.secondary,
        }}
      ></Box>
      <Box
        marginTop="xl"
        style={{
          backgroundColor: '#F6F6F6',
          borderRadius: 75,
          marginBottom: 50,
          minHeight: hp('75%'),
          flex: 1,
        }}
      >
        <Box style={{ alignItems: 'center' }}>
          <Text variant="titleCard" marginTop="xl" marginBottom="m" style={styles.h2}>
            My <Text color="primary">settings</Text>
          </Text>
        </Box>
        <Box marginTop="m" style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Box marginBottom="m" marginTop="xl">
            <Button
              label="My alimentation"
              variant="primary"
              onPress={() => navigation.navigate('SettingsFood')}
              style={{ margin: 5, backgroundColor: '#58508d' }}
            />
          </Box>
          <Box marginBottom="m">
            <Button
              label="My housing"
              variant="primary"
              onPress={() => navigation.navigate('SettingsFood')}
              style={{ margin: 5 }}
            />
          </Box>
          <Box marginBottom="xl">
            <Button
              label="My spendings"
              variant="primary"
              onPress={() => navigation.navigate('SettingsFood')}
              style={{ margin: 5 }}
            />
          </Box>
          <Box style={{ marginTop: hp(4) }}>
            <ButtonSecondary
              label="Logout"
              variant="default"
              onPress={() => logout()}
              style={{ margin: 5 }}
            />
            <ButtonDanger
              label="Delete my account"
              variant="default"
              onPress={() => logout()}
              style={{ margin: 5 }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  viewContainer: {
    alignItems: 'center',
    backgroundColor: '#0C0D34',
  },
  h2: {
    color: 'rgba(54, 54, 83, 0.7)',
  },
  boxGraph: {
    marginTop: hp(100) / 20,
    width: wp('95%'),
    borderRadius: 10,
    paddingLeft: 30,
  },
  boxContainer: {
    width: wp(100),
    height: hp('18%'),
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
  },
  boxTravel: {
    width: wp(100),
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  textButton: { width: 60, margin: 5 },
  boxButton: { flexDirection: 'row', justifyContent: 'flex-end', marginRight: 10 },
});
