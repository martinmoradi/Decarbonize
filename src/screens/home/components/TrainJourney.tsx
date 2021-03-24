import React from 'react';
import { Box, Text } from '../../../components/Theme';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Image, View, StyleSheet } from 'react-native';

const TrainJourney = () => {
  return (
    <Box
      style={styles.boxContainer}
      justifyContent="center"
      backgroundColor="lightgray"
      borderBottomColor="white"
    >
      <View style={styles.viewContainer}>
        <View style={styles.viewImg}>
          <Image source={require('../../../../assets/images/train.png')} style={styles.imgStyle} />
        </View>
        <View style={{ marginLeft: wp('5%') }}>
          <Text variant="body">Train Travel</Text>
        </View>
        <View style={{ marginLeft: wp('5%') }}>
          <Text variant="header">+ 8kg Co2</Text>
        </View>
      </View>
    </Box>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    width: wp('90%'),
    height: 60,
    borderBottomWidth: 2,
    borderRadius: 20,
  },
  viewContainer: { marginLeft: wp('10%'), flexDirection: 'row', alignItems: 'center' },
  viewImg: {
    backgroundColor: 'blue',
    padding: 5,
    borderRadius: 10,
  },
  imgStyle: { height: 24, width: 24, tintColor: 'white' },
});

export default TrainJourney;