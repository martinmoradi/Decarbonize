import React from 'react';
import { Box, Text } from '../../../components/Theme';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Image, View, StyleSheet } from 'react-native';

const Trajet = () => {
  return (
    <Box
      style={s.boxContainer}
      justifyContent="center"
      backgroundColor="lightgray"
      borderBottomColor="white"
    >
      <View style={s.viewContainer}>
        <View style={s.viewImg}>
          <Image source={require('../../../../assets/images/van.png')} style={s.imgStyle} />
        </View>
        <View style={{ marginLeft: wp('5%') }}>
          <Text variant="body">Car Travel</Text>
        </View>
        <View style={{ marginLeft: wp('5%') }}>
          <Text variant="header">+ 16kg Co2</Text>
        </View>
      </View>
    </Box>
  );
};

const s = StyleSheet.create({
  boxContainer: {
    width: wp('90%'),
    height: 60,
    borderBottomWidth: 2,
    borderRadius: 20,
  },
  viewContainer: {
    marginLeft: wp('10%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewImg: {
    backgroundColor: '#39D697',
    padding: 5,
    borderRadius: 10,
  },
  imgStyle: { height: 24, width: 24, tintColor: 'white' },
});
export default Trajet;
