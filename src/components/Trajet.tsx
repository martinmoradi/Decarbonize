import React from 'react';
import { Box, Text } from './Theme';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Dimensions, Image, View } from 'react-native';
const { width } = Dimensions.get('window');

const Trajet = () => {
  return (
    <Box
      style={{ width: wp('90%'), height: 60, borderBottomWidth: 2, borderRadius: 20 }}
      justifyContent="center"
      backgroundColor="lightgray"
      borderBottomColor="white"
    >
      <View
        style={{
          marginLeft: wp('10%'),
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            backgroundColor: '#39D697',
            padding: 5,
            borderRadius: 10,
          }}
        >
          <Image
            source={require('../../assets/images/van.png')}
            style={{ height: 24, width: 24, tintColor: 'white' }}
          />
        </View>
        <View style={{ marginLeft: wp('5%') }}>
          <Text variant="body">Car Travel</Text>
        </View>
      </View>
    </Box>
  );
};

export default Trajet;
