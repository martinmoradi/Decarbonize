import React from 'react';
import { Box, Text } from '../../../components/Theme';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Image, View, StyleSheet } from 'react-native';
import { useTypedSelector } from '../../../hooks';



const TramJourney = () => {
  const {data}= useTypedSelector(state => state.emissions)

  return (
    <Box
      style={styles.boxContainer}
      justifyContent="center"
      backgroundColor="lightgray"
      borderBottomColor="white"
    >
      <View style={styles.viewContainer}>
        <View style={styles.viewImg}>
          <Image
            source={require('../../../../assets/images/tramway.png')}
            style={styles.imgStyle}
          />
        </View>
        <View style={{ marginLeft: wp('5%') }}>
          <Text variant="body">Tram Travel</Text>
        </View>
        <View style={{ marginLeft: wp('5%') }}>
          <Text variant="header">+ {data.total_tramway_emissions}kg Co2</Text>
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
    backgroundColor: '#808080',
    padding: 5,
    borderRadius: 10,
  },
  imgStyle: { height: 24, width: 24, tintColor: 'white' },
});

export default TramJourney;
