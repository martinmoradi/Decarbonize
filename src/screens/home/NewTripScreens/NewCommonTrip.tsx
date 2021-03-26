import React from 'react';
import { Box, Text, Button } from '../../../components';
import { TripStackNavigationProps } from '../../../routers/NavigationTypes';
import Checkbox from '../../../components/Checkbox';
import { useActions, useTypedSelector } from '../../../hooks';
import { Dimensions, TextInput, ActivityIndicator } from 'react-native';

const NewCommonTrip = ({ route, navigation }: TripStackNavigationProps<'NewCommonTrip'>) => {
  const { postCommonTrip } = useActions();
  const { width } = Dimensions.get('window');
  const { errorMessage, isLoading } = useTypedSelector(state => state.trips);
  const [tripData, setTripData] = React.useState({
    vehicle_type: route.params.type,
    round_trip: false,
    distance: 0,
  });

  const changeDistance = (e: string) => {
    setTripData({
      vehicle_type: route.params.type,
      round_trip: tripData.round_trip,
      distance: parseFloat(e),
    });
  };

  return (
    <Box style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Box
        marginBottom="s"
        justifyContent="center"
        alignItems="center"
        paddingBottom="m"
        style={{
          width: width - 40,
          height: 100,
          borderRadius: 20,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 9,
          },
          shadowOpacity: 0.5,
          shadowRadius: 12.35,
          elevation: 19,
        }}
        backgroundColor="primary"
      >
        <Text variant="title2" color="white">
          SVG {route.params.type}
        </Text>
        <Text>Faire une fonction en fonction du type</Text>
      </Box>
      {errorMessage ? (
        <Text
          variant="body"
          style={{ fontFamily: 'Avenir-Semibold', color: '#FF0058' }}
          textAlign="center"
          marginBottom="l"
        >
          {errorMessage}
        </Text>
      ) : null}
      <Box
        marginBottom="s"
        justifyContent="center"
        alignItems="center"
        paddingBottom="m"
        style={{
          width: width - 40,
          height: 200,
          borderRadius: 20,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 9,
          },
          shadowOpacity: 0.5,
          shadowRadius: 12.35,
          elevation: 19,
        }}
        backgroundColor="primary"
      >
        <Text variant="title2" color="white">
          Distance in Km
        </Text>
        <TextInput
          style={{
            height: 40,
            width: 100,
            margin: 12,
            backgroundColor: 'white',
            justifyContent: 'center',
          }}
          onChangeText={changeDistance}
          value={tripData.distance}
          placeholder={'0'}
          keyboardType="numeric"
        />
        <Checkbox
          label="Round Trip ?"
          checked={tripData.round_trip}
          onChange={() =>
            setTripData({
              vehicle_type: route.params.type,
              round_trip: !tripData.round_trip,
              distance: tripData.distance,
            })
          }
        />
      </Box>
      {isLoading ? (
        <Button
          variant="primary"
          label={<ActivityIndicator />}
          onPress={() => postCommonTrip(tripData)}
        />
      ) : (
        <Button variant="primary" label="Add" onPress={() => postCommonTrip(tripData)} />
      )}
      <Button variant="default" label="Go Back" onPress={() => navigation.goBack()} />
    </Box>
  );
};

export default NewCommonTrip;
