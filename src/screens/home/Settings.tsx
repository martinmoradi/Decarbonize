import React from 'react';
import { StyleSheet } from 'react-native';
import { useActions } from '../../hooks';
import { Box, Button, Text, useTheme } from '../../components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { SettingsStackNavigationProps } from '../../routers/NavigationTypes';
import { ButtonDanger, ButtonSecondary } from '../../components/Button';

const SettingsScreen = ({ navigation }: SettingsStackNavigationProps<'Settings'>) => {
  const theme = useTheme();
  const { logout, deleteUser } = useActions();

  const handleDeleteUser = () => {
    deleteUser();
    logout();
  };

  return (
    <Box style={{ backgroundColor: theme.colors.secondary, flex: 1 }}>
      <Box
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: theme.colors.secondary,
          minHeight: hp(100),
        }}
      ></Box>
      <Box marginBottom="xl" marginTop="xl">
        <Box
          alignItems="center"
          style={styles.boxSettings}
          backgroundColor="lightgray"
          paddingTop="l"
          paddingBottom="xl"
          marginTop="m"
        >
          <Text
            variant="titleCard"
            marginTop="s"
            marginBottom="s"
            style={{ color: theme.colors.text }}
          >
            My <Text color="primary">settings</Text>
          </Text>

          <Box alignItems="center" justifyContent="center" style={{ flex: 1 }}>
            <Button
              label="Change fixed emissions"
              variant="primary"
              style={{ marginBottom: hp('2%') }}
              onPress={() => navigation.navigate('SettingsEmission')}
            />

            <Button
              label="Logout"
              variant="primary"
              onPress={() => logout()}
              style={{ marginBottom: hp('2%') }}
            />

            <ButtonDanger
              variant="default"
              label="Delete Account"
              onPress={() => handleDeleteUser()}
              style={{ width: 140 }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  boxSettings: {
    width: wp('100%'),
    height: hp('75%'),
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 19,
  },
});
