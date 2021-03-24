import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Box, Text } from '../../../components';
import { SettingsStackNavigationProps } from '../../../routers/NavigationTypes';
import { useTypedSelector } from '../../../hooks';

const SettingEmission = ({ navigation }: SettingsStackNavigationProps<'SettingsEmission'>) => {
  const { food } = useTypedSelector(state => state.onboarding);
  const [breakfast, setBreakfast] = useState(food.breakfasts_per_week);
  return (
    <ScrollView>
      <View style={{ alignItems: 'center', flex: 1 }}>
        <Box
          paddingLeft="m"
          paddingTop="s"
          justifyContent="flex-end"
          paddingBottom="m"
          style={styles.boxContainer}
          backgroundColor="primary"
          marginBottom="s"
        >
          <Text variant="title2" color="white">
            EMISSIONS SETTINGS
          </Text>
        </Box>
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Box
          alignItems="center"
          marginTop="m"
          paddingTop="m"
          style={styles.boxSettings}
          justifyContent="center"
          backgroundColor="white"
        >
          <Box
            flexDirection="row"
            alignItems="center"
            style={{ width: wp('90%'), height: 70, borderBottomWidth: 2, borderRadius: 20 }}
            justifyContent="space-between"
            backgroundColor="lightgray"
            borderBottomColor="white"
          >
            <BorderlessButton onPress={() => navigation.navigate('SettingsFood')}>
              <Text variant="body">Change food</Text>
            </BorderlessButton>
          </Box>
          <Box
            flexDirection="row"
            alignItems="center"
            style={{ width: wp('90%'), height: 70, borderBottomWidth: 2, borderRadius: 20 }}
            justifyContent="space-between"
            backgroundColor="lightgray"
            borderBottomColor="white"
          >
            <BorderlessButton onPress={() => navigation.navigate('SettingsEnergy')}>
              <Text variant="body">Change energy</Text>
            </BorderlessButton>
          </Box>
          <Box
            flexDirection="row"
            alignItems="center"
            style={{ width: wp('90%'), height: 70, borderBottomWidth: 2, borderRadius: 20 }}
            justifyContent="space-between"
            backgroundColor="lightgray"
            borderBottomColor="white"
          >
            <BorderlessButton onPress={() => navigation.navigate('SettingsSpending')}>
              <Text variant="body">Change spending</Text>
            </BorderlessButton>
          </Box>
        </Box>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    width: wp('100%'),
    height: 100,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
  },
  boxSettings: {
    width: wp('100%'),
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
export default SettingEmission;
