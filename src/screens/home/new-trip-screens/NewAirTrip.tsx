import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Box, Button, Checkbox, Text, useTheme } from '../../../components';
import { useActions, useTypedSelector } from '../../../hooks';
import { TripStackNavigationProps } from '../../../routers';

interface AirportQuery {
  name: string;
  country: {
    iso2: string;
    iso3: string;
    isoNumeric: number;
    name: string;
    officialName: string;
  };
  timeZone: string;
  icao: string;
  iata: string;
  faa: string;
  aid: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  servedCity: string;
  servedCityGoverningDistrict: {};
}

const NewAirTrip = ({ navigation }: TripStackNavigationProps<'NewAirTrip'>) => {
  const theme = useTheme();
  const { isLoading } = useTypedSelector(state => state.trips);
  const { postAirTrips } = useActions();
  // query results
  const [departureData, setDepartureData] = useState([]);
  const [arrivalData, setArrivalData] = useState([]);
  // user input
  const [departureSearch, setDepartureSearch] = useState<string>('');
  const [arrivalSearch, setArrivalSearch] = useState<string>('');
  // selected item
  const [selectedDeparture, setSelectedDeparture] = useState<AirportQuery>();
  const [selectedArrival, setSelectedArrival] = useState<AirportQuery>();
  // state for open suggestions
  const [departureSuggestions, setDepartureSuggestions] = useState(true);
  const [arrivalSuggestions, setArrivalSuggestions] = useState(true);
  // checkbox
  const [isRoundTrip, setIsRoundTrip] = useState(false);

  const fetchAirportResults = async (query: String, variant: string) => {
    try {
      const response = await fetch(
        `https://api.aviowiki.com/free/airports/search?query=${query}&size=4`,
        {
          method: 'GET',
        }
      );
      const { content, error } = await response.json();
      if (!response.ok) {
        throw new Error(error);
      }
      variant === 'departure' ? setDepartureData(content) : setArrivalData(content);
    } catch (err) {
      throw new Error(err.message);
    }
  };

  // departures

  useEffect(() => {
    if (departureSearch.length > 3) {
      setDepartureSuggestions(true);
      fetchAirportResults(departureSearch, 'departure');
    }
  }, [departureSearch]);

  useEffect(() => {
    if (selectedDeparture) {
      setDepartureSearch(selectedDeparture.name);
      setDepartureSuggestions(false);
    }
  }, [selectedDeparture]);

  const handleDeparture = (item: AirportQuery) => {
    setSelectedDeparture(item);
    setDepartureSuggestions(false);
  };

  const handleCloseDeparture = () => {
    setDepartureSearch('');
    setDepartureSuggestions(false);
  };

  // arrivals

  useEffect(() => {
    if (arrivalSearch.length > 3) {
      setArrivalSuggestions(true);
      fetchAirportResults(arrivalSearch, 'arrival');
    }
  }, [arrivalSearch]);

  useEffect(() => {
    if (selectedArrival) {
      setArrivalSearch(selectedArrival.name);
      setArrivalSuggestions(false);
    }
  }, [selectedArrival]);

  const handleArrival = (item: AirportQuery) => {
    setSelectedArrival(item);
    setArrivalSuggestions(false);
  };

  const handleCloseArrival = () => {
    setArrivalSearch('');
    setArrivalSuggestions(false);
  };

  const handleSubmit = () => {
    if (selectedDeparture && selectedArrival) {
      postAirTrips({
        round_trip: isRoundTrip,
        departure: selectedDeparture.name,
        arrival: selectedArrival.name,
        departure_latitude: selectedDeparture.coordinates.latitude,
        departure_longitude: selectedDeparture.coordinates.longitude,
        arrival_latitude: selectedArrival.coordinates.latitude,
        arrival_longitude: selectedArrival.coordinates.longitude,
      });
    }
  };

  return (
    <Box>
      <Box
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: theme.colors.secondary,
        }}
      ></Box>
      <KeyboardAwareScrollView
        style={{
          backgroundColor: theme.colors.secondary,
          marginTop: 40,
        }}
      >
        <Box
          alignItems="center"
          style={styles.boxInfo}
          backgroundColor="lightgray"
          paddingBottom="xl"
          paddingTop="m"
          marginTop="xl"
        >
          <Text
            variant="titleCard"
            marginBottom="s"
            marginTop="s"
            style={{ color: theme.colors.text }}
          >
            New <Text color="primary">Airtrip</Text>
          </Text>
          <Box style={[styles.imgContainer, { backgroundColor: '#58508d' }]}>
            <Image
              source={require('../../../../assets/images/airplanejourney.png')}
              style={styles.imgStyle}
            />
          </Box>
          <Box marginTop="l" style={{ alignItems: 'center' }}>
            <Box style={{ alignItems: 'center' }}>
              <Text variant="titleFoodCard">
                <Text color="primary">Departure </Text>airport
              </Text>
            </Box>
            <Box marginTop="s" style={{ width: wp(90), backgroundColor: 'white' }}>
              <SearchBar
                placeholder="Search your departure airport"
                showCancel
                containerStyle={{ backgroundColor: theme.colors.lightgray }}
                inputContainerStyle={{ backgroundColor: theme.colors.lightgray }}
                inputStyle={{ backgroundColor: theme.colors.lightgray }}
                onChangeText={setDepartureSearch}
                onClear={() => handleCloseDeparture()}
                value={departureSearch}
                style={{ backgroundColor: theme.colors.lightgray }}
              />
              {departureSuggestions && (
                <FlatList
                  style={{
                    paddingLeft: 15,
                    paddingBottom: 15,
                    backgroundColor: theme.colors.lightgray,
                  }}
                  data={departureData}
                  keyExtractor={(i: AirportQuery) => `${i.icao}${i.coordinates.longitude}${i.faa}`}
                  extraData={departureSearch}
                  renderItem={({ item }) => {
                    if (departureSuggestions) {
                      return (
                        <Box
                          style={{
                            borderBottomWidth: 1,
                            borderBottomColor: theme.colors.secondary,
                            paddingVertical: 8,
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                          }}
                        >
                          <TouchableOpacity onPress={() => handleDeparture(item)}>
                            <Text>{`${item.name}`}</Text>
                          </TouchableOpacity>
                        </Box>
                      );
                    } else {
                      return null;
                    }
                  }}
                />
              )}
            </Box>
          </Box>
          <Box marginTop="m" style={{ alignItems: 'center' }}>
            <Box style={{ alignItems: 'center' }}>
              <Text variant="titleFoodCard">
                <Text color="primary">Arrival </Text>airport
              </Text>
            </Box>
            <Box marginTop="s" style={{ width: wp(90) }}>
              <SearchBar
                placeholder="Search your arrival airport"
                showCancel
                containerStyle={{
                  backgroundColor: theme.colors.lightgray,
                }}
                inputContainerStyle={{
                  backgroundColor: theme.colors.lightgray,
                }}
                inputStyle={{
                  backgroundColor: theme.colors.lightgray,
                  paddingLeft: 10,
                }}
                onChangeText={setArrivalSearch}
                onClear={() => handleCloseArrival()}
                value={arrivalSearch}
                style={{ backgroundColor: theme.colors.lightgray }}
              />
              {arrivalSuggestions && (
                <FlatList
                  style={{
                    paddingLeft: 15,
                    paddingBottom: 15,
                    backgroundColor: theme.colors.lightgray,
                  }}
                  data={arrivalData}
                  keyExtractor={(i: AirportQuery) => `${i.icao}${i.coordinates.longitude}${i.faa}`}
                  extraData={arrivalSearch}
                  renderItem={({ item }) => {
                    if (arrivalSuggestions) {
                      return (
                        <Box
                          style={{
                            borderBottomWidth: 1,
                            borderBottomColor: theme.colors.lightgray,
                            paddingVertical: 8,
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                          }}
                        >
                          <TouchableOpacity onPress={() => handleArrival(item)}>
                            <Text>{`${item.name}`}</Text>
                          </TouchableOpacity>
                        </Box>
                      );
                    }
                  }}
                />
              )}
            </Box>
          </Box>
          <Box style={{ marginTop: hp(4) }}>
            <Checkbox
              label="Is it a round trip?"
              checked={isRoundTrip}
              onChange={() => setIsRoundTrip(!isRoundTrip)}
            />
          </Box>

          <Box alignItems="center" style={{ justifyContent: 'center', marginTop: hp(4) }}>
            {isLoading ? (
              <Button
                variant="primary"
                style={{ width: 180 }}
                onPress={() => 'void'}
                label={<ActivityIndicator color="#ffffff" />}
              />
            ) : (
              <Button
                variant="primary"
                onPress={() => handleSubmit()}
                label="Save this trip"
                style={{ width: 180 }}
              />
            )}
            <Box style={{ marginTop: hp(3) }}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Box
                  style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
                >
                  <Text variant="body" style={{ color: '#ff6361' }}>
                    Cancel
                  </Text>
                </Box>
              </TouchableOpacity>
            </Box>
          </Box>
        </Box>
      </KeyboardAwareScrollView>
    </Box>
  );
};

const styles = StyleSheet.create({
  boxInfo: {
    width: wp('100%'),
    height: hp('82%'),
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
  },
  imgStyle: {
    height: 86,
    width: 86,
    borderRadius: 15,

    tintColor: 'white',
  },
  imgContainer: {
    width: wp(95),
    borderRadius: 10,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    paddingVertical: 10,
    justifyContent: 'center',
  },
});

export default NewAirTrip;
