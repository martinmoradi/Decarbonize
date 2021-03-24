import React from 'react';
import { Box, Text, Button } from '../../../components';
import { TripStackNavigationProps } from '../../../routers/NavigationTypes';

const NewCarTrip = ({ navigation }: TripStackNavigationProps<'NewCarTrip'>) => {
  return (
    <Box style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>New Car Trip</Text>
      <Button variant="primary" label="Retour" onPress={() => navigation.goBack()} />
    </Box>
  );
};

export default NewCarTrip;
