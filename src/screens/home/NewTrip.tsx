import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Box, Text, useTheme } from '../../components';
import { TripStackNavigationProps } from '../../routers/NavigationTypes';
import TransportationCard from './components/TransportationCard';

const NewTrip = ({ navigation }: TripStackNavigationProps<'NewTrip'>) => {
  const theme = useTheme();

  return (
    <Box>
      <Box
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: theme.colors.secondary,
        }}
      ></Box>

      <Box
        marginBottom="xl"
        style={{
          backgroundColor: '#F6F6F6',
          borderRadius: 75,
          marginTop: hp(7),
          minHeight: hp('100%'),
        }}
      >
        <Box style={{ alignItems: 'center', flex: 1 }}>
          <Text
            variant="titleCard"
            marginTop="l"
            marginBottom="m"
            paddingTop="l"
            style={{ textAlign: 'center', color: theme.colors.text }}
          >
            Select a <Text color="primary">transportation</Text>
          </Text>
          <ScrollView>
            <TransportationCard variant={'car'} navigation={navigation} />
            <TransportationCard variant={'bus'} navigation={navigation} />
            <TransportationCard variant={'train'} navigation={navigation} />
            <TransportationCard variant={'plane'} navigation={navigation} />
            <TransportationCard variant={'tramway'} navigation={navigation} />
            <Box style={{ marginBottom: 160 }}>
              <TransportationCard variant={'metro'} navigation={navigation} />
            </Box>
          </ScrollView>
        </Box>
      </Box>
    </Box>
  );
};

export default NewTrip;
