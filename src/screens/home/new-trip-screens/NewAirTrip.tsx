import React, { useEffect, useRef, useState } from 'react';
import { Box, Text, Button, Checkbox, useTheme, TextInput } from '../../../components';
import { TripStackNavigationProps } from '../../../routers';
import { useActions, useTypedSelector } from '../../../hooks';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  TextInput as RNTextInput,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { SearchBar } from 'react-native-elements';

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

const NewAirTrip = ({ route, navigation }: TripStackNavigationProps<'NewAirTrip'>) => {
  const theme = useTheme();
  const { errorMessage, isLoading } = useTypedSelector(state => state.trips);
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
  // placeholders inside searchbar
  const [departurePlaceHolder, setDeparturePlaceholder] = useState<string>(
    'Search for your departure airport'
  );
  const [arrivalPlaceHolder, setArrivalPlaceholder] = useState<string>(
    'Search for your arrival airport'
  );
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

  useEffect(() => {
    if (departureSearch.length > 3) {
      fetchAirportResults(departureSearch, 'departure');
    }
  }, [departureSearch]);

  useEffect(() => {
    if (!departureSuggestions) {
      setDepartureSuggestions(true);
    }
  }, [departureSearch]);

  useEffect(() => {
    if (!arrivalSuggestions) {
      setArrivalSuggestions(true);
    }
  }, [arrivalSearch]);

  useEffect(() => {
    if (selectedDeparture) {
      setDepartureSearch(selectedDeparture.name);
      setDepartureSuggestions(false);
    } else {
      setDepartureSuggestions(true);
    }
  }, [selectedDeparture]);

  useEffect(() => {
    if (arrivalSearch.length > 3) {
      fetchAirportResults(arrivalSearch, 'arrival');
    }
  }, [arrivalSearch]);

  useEffect(() => {
    if (selectedArrival) {
      setArrivalSearch(selectedArrival.name);
      setArrivalSuggestions(false);
    } else {
      setArrivalSuggestions(true);
    }
  }, [selectedArrival]);

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

  const handleDeparture = item => {
    setSelectedDeparture(item);
    setDepartureSuggestions(false);
  };

  const handleArrival = item => {
    setSelectedArrival(item);
    setArrivalSuggestions(false);
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
          marginTop="m"
        >
          <Text variant="titleCard" marginBottom="s" style={{ color: theme.colors.text }}>
            New <Text color="primary">Air</Text> trip
          </Text>
          <Box style={[styles.imgContainer, { backgroundColor: '#58508d' }]}>
            <Image
              source={require('../../../../assets/images/airplanejourney.png')}
              style={styles.imgStyle}
            />
          </Box>
          <Box style={{ alignItems: 'center' }}>
            <Box style={{ alignItems: 'center' }}>
              <Text variant="body">Departure airport</Text>
            </Box>
            <Box marginTop="s" style={{ width: wp(85), backgroundColor: 'white' }}>
              <SearchBar
                placeholder={departurePlaceHolder}
                onChangeText={setDepartureSearch}
                value={departureSearch}
                style={{ backgroundColor: 'white' }}
              />
              <FlatList
                style={{
                  paddingLeft: 15,
                  marginTop: 15,
                  paddingBottom: 15,
                  borderBottomColor: '#26a69a',
                  borderBottomWidth: 1,
                }}
                data={departureData}
                keyExtractor={i => i.icao}
                extraData={departureSearch}
                renderItem={({ item }) => {
                  if (departureSuggestions) {
                    return (
                      <Box
                        style={{
                          borderBottomWidth: 1,
                          borderBottomColor: theme.colors.info,
                          marginBottom: 5,
                        }}
                      >
                        <TouchableOpacity onPress={() => handleDeparture(item)}>
                          <Text>{`${item.name}`}</Text>
                        </TouchableOpacity>
                      </Box>
                    );
                  }
                }}
              />
            </Box>
          </Box>
          <Box style={{ alignItems: 'center' }}>
            <Box style={{ alignItems: 'center' }}>
              <Text variant="body">Arrival airport</Text>
            </Box>
            <Box marginTop="s" style={{ width: wp(85), backgroundColor: 'white' }}>
              <SearchBar
                placeholder={arrivalPlaceHolder}
                onChangeText={setArrivalSearch}
                value={arrivalSearch}
                style={{ backgroundColor: 'white' }}
              />
              <FlatList
                style={{
                  paddingLeft: 15,
                  marginTop: 15,
                  paddingBottom: 15,
                  borderBottomColor: '#26a69a',
                  borderBottomWidth: 1,
                }}
                data={arrivalData}
                keyExtractor={i => i.icao}
                extraData={arrivalSearch}
                renderItem={({ item }) => {
                  if (arrivalSuggestions) {
                    return (
                      <Box
                        style={{
                          borderBottomWidth: 1,
                          borderBottomColor: theme.colors.info,
                          marginBottom: 5,
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
  boxStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: 'center',
    elevation: 5,
  },
  boxContainer: {
    width: wp(100),
    height: 50,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
  },
  boxDistance: {
    width: wp(100) - 40,
    height: 300,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 10,
  },
  inputStyle: {
    height: 40,
    width: 100,
    margin: 12,
    backgroundColor: 'white',
    justifyContent: 'center',
    textAlign: 'center',
  },
  Button: { width: 100, margin: 5 },
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
