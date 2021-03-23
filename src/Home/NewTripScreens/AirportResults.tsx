import React from 'react';
import { Box, Text, Button } from '../../components';
import { TripStackNavigationProps } from '../../components/Navigation';
import { Dimensions } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

const AirPortResults = ({ route, navigation }: TripStackNavigationProps<'AirPortResults'>) => {
  const [results, setResults] = React.useState([{}]);
  const [selectedResult, setSelectedResult] = React.useState({});

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
          Query for {route.params.type}: {route.params.query}
        </Text>
      </Box>
      {results[0].name ? (
        <Box>
          {results.map(element => {
            return (
              <Box
                alignItems="center"
                style={{ width: width, height: 80, borderBottomWidth: 2 }}
                justifyContent="center"
                backgroundColor="primary"
                borderBottomColor="white"
              >
                <BorderlessButton
                  style={{ width: width }}
                  onPress={() => setSelectedResult(element)}
                >
                  <Text variant="button" color={selectedResult.name === element.name? "info": "white" }>{element.name}</Text>
                </BorderlessButton>
              </Box>
            );
          })}
        </Box>
      ) : (
        <Text>Chargement...</Text>
      )}

      <Button
        variant="primary"
        label="Valider"
        onPress={() =>
          navigation.navigate('NewAirTripScreen', {
            type: route.params.type,
            queryResult: selectedResult,
          })
        }
      />
      <Button variant="primary" label="Retour" onPress={() => navigation.goBack()} />
    </Box>
  );
};

export default AirPortResults;
