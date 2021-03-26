import React from 'react';
import { Box, Text, Button } from '../../../components';
import { TripStackNavigationProps } from '../../../routers/NavigationTypes';
import { Dimensions, ScrollView, View, StyleSheet } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const { width } = Dimensions.get('window');

const AirPortResults = ({ route, navigation }: TripStackNavigationProps<'AirPortResults'>) => {
  const [selectedResult, setSelectedResult] = React.useState({
    name: '',
    country: {
      iso2: '',
      iso3: '',
      isoNumeric: 0,
      name: '',
      officialName: '',
    },
    timeZone: '',
    icao: '',
    iata: '',
    faa: '',
    aid: '',
    coordinates: {
      latitude: 0,
      longitude: 0,
    },
    servedCity: '',
    servedCityGoverningDistrict: {},
  });
  const [results, setResults] = React.useState([selectedResult]);

  const fetchAirportResults = async (query: String) => {
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
      setResults(content);
    } catch (err) {
      throw new Error(err.message);
    }
  };

  React.useEffect(() => {
    fetchAirportResults(route.params.query);
  }, []);

  return (
    <ScrollView style={{ backgroundColor: '#39D697' }}>
      <View style={styles.mainView}>
        <Box
          paddingLeft="m"
          paddingTop="s"
          justifyContent="flex-end"
          paddingBottom="m"
          style={styles.boxContainer}
          backgroundColor="primary"
          marginBottom="s"
        />
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
            Results for {route.params.type}: {route.params.query}
          </Text>
        </Box>
        <Box
          alignItems="center"
          style={styles.boxTravelMode}
          backgroundColor="lightgray"
          borderBottomColor="white"
        >
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: 'black',
              width: wp('90%'),
              alignItems: 'center',
            }}
          >
            <Text variant="title3" margin="s">
              Pick your choice:
            </Text>
          </View>
          {results[0].name ? (
            <Box>
              {results.map(element => {
                return (
                  <Box
                    alignItems="center"
                    style={{ width: wp('90%'), height: 80, borderBottomWidth: 2 }}
                    justifyContent="center"
                    backgroundColor="lightgray"
                    borderBottomColor="white"
                  >
                    <BorderlessButton
                      style={{ width: width }}
                      onPress={() => setSelectedResult(element)}
                    >
                      <Text
                        variant="button"
                        color={selectedResult.name === element.name ? 'primary' : 'black'}
                      >
                        {element.name}
                      </Text>
                    </BorderlessButton>
                  </Box>
                );
              })}
            </Box>
          ) : (
            <Text>Chargement...</Text>
          )}
          <View style={{ flexDirection: 'row' }}>
            <Button
              variant="default"
              style={styles.btnStyle}
              label="Retour"
              onPress={() => navigation.goBack()}
            />
            <Button
              variant="primary"
              style={[styles.btnStyle, { marginLeft: wp('1%') }]}
              label="Valider"
              onPress={() =>
                navigation.navigate('NewAirTrip', {
                  type: route.params.type,
                  queryResult: selectedResult,
                })
              }
            />
          </View>
        </Box>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#39D697',
  },
  boxContainer: {
    width: width,
    height: 50,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
  },
  boxTravelMode: {
    width: wp('90%'),
    height: hp('80%'),
    borderRadius: 20,
  },
  btnStyle: {
    width: 140,
  },
});
export default AirPortResults;
