import React from 'react';
import {Box, Text} from '.'
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const Trajet = ()=>{
    return(
        <Box
        alignItems="center"
        style={{ width: width, height: 50, borderBottomWidth: 2 }}
        justifyContent="center"
        backgroundColor="white"
        borderBottomColor="primary"
      >
        <Text variant="title3" color="primary">
          Trajet X
        </Text>
      </Box>
    )
}

export default Trajet