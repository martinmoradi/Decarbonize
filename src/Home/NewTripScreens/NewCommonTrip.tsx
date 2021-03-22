import React from 'react';
import { Box, Text, Button } from '../../components';
import { TripStackNavigationProps } from '../../components/Navigation';
import { Dimensions, TextInput } from 'react-native';
const { width } = Dimensions.get('window');

const NewCommonTripScreen = ({
  route,
  navigation,
}: TripStackNavigationProps<'NewCommonTripScreen'>) => {
  const [distance, setDistance] = React.useState(undefined);

  const changeDistance = (e: string) => {
    setDistance(parseFloat(e));
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
          SVG du {route.params.type}
        </Text>
      </Box>
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
          Distance en Km
        </Text>
        <TextInput
          style={{ height: 40, width: 100, margin: 12, backgroundColor: 'white', justifyContent:"center" }}
          onChangeText={changeDistance}
          value={distance}
          placeholder={"0"}
          keyboardType="numeric"
        />
      </Box>
      <Button variant="primary" label="Valider" onPress={() => alert(distance)} />
      <Button variant="default" label="Retour" onPress={() => navigation.goBack()} />
    </Box>
  );
};

export default NewCommonTripScreen;
