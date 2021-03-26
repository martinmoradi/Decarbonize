import React from 'react';
import { Box, Text, Button } from '../../../components';
import { TripStackNavigationProps } from '../../../routers/NavigationTypes';
import { Dimensions, ScrollView, TextInput, View, StyleSheet, Image } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const { width } = Dimensions.get('window');

const AirPortSearch = ({ route, navigation }: TripStackNavigationProps<'AirPortSearch'>) => {
  const [airport, setAirport] = React.useState('');

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
        ></Box>
        <Box style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Box
            flexDirection="row"
            justifyContent="space-around"
            alignItems="center"
            style={styles.boxStyle}
            backgroundColor="lightgray"
          >
            <Image
              source={require('../../../../assets/images/airplane.png')}
              style={styles.imgStyle}
            />
          </Box>
          <Box
            marginBottom="s"
            justifyContent="space-around"
            alignItems="center"
            paddingBottom="m"
            style={styles.boxDistance}
            backgroundColor="lightgray"
          >
            <Text variant="title2">
              {route.params.type}{' '}
              <Text variant="title2" style={{ color: '#39D697' }}>
                Airport
              </Text>
            </Text>
            <TextInput
              style={styles.inputStyle}
              onChangeText={setAirport}
              value={airport}
              placeholder={'Paris'}
            />
            <View style={{ flexDirection: 'row' }}>
              <Button
                variant="default"
                label="Go back"
                onPress={() => navigation.goBack()}
                style={styles.Button}
              />
              <Button
                variant="primary"
                label="Search"
                onPress={() =>
                  navigation.navigate('AirPortResults', { query: airport, type: route.params.type })
                }
                style={styles.Button}
              />
            </View>
          </Box>
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
  boxStyle: {
    marginBottom: hp('2.5%'),
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('90%'),
    height: 130,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
  },
  imgStyle: {
    height: 130,
    width: wp('90%'),
    borderRadius: 15,
  },
  boxDistance: {
    width: width - 40,
    height: 300,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
  },
  inputStyle: {
    height: 40,
    width: 100,
    margin: 12,
    backgroundColor: 'white',
    justifyContent: 'center',
    textAlign: 'center',
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
  Button: { width: 100, margin: 5 },
});
export default AirPortSearch;
