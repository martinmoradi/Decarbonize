import React, { useRef } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Box } from '../components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Tips from '../components/Tips/Tips';
import { ecologyFacts } from '../data/ecologyFacts';
import { useTypedSelector } from '../hooks/useTypedSelector';
const { width, height } = Dimensions.get('window');

const EngagementsScreen = () => {
  const emissions = useTypedSelector(state => state.emissions.data);
  const {
    appliances,
    reduced_heating,
    eco_driving,
    tap_water,
    food_wastes,
    bulk_food,
    zero_wastes,
  } = emissions;

  const scroll = useRef<Carousel<string>>(null);

  const engagementsData = [
    { title: 'Switch off my devices in standby', isCommitted: appliances },
    { title: 'Reduce heating 1 degree', isCommitted: reduced_heating },
    { title: 'Adopt eco-driving', isCommitted: eco_driving },
    { title: 'I drink tap water instead of bottles', isCommitted: tap_water },
    { title: 'Reduce my food waste', isCommitted: food_wastes },
    { title: 'Do your shopping in bulk', isCommitted: bulk_food },
    { title: 'A zero waste approach', isCommitted: zero_wastes },
  ];

  type PropsRenderItem = {
    item: string;
    index: number;
  };
  const renderItem = ({ item, index }: PropsRenderItem) => {
    return (
      <View style={styles.viewContainer}>
        <Text key={index} variant="body" style={{ textAlign: 'center' }}>
          {item}
        </Text>
      </View>
    );
  };

  return (
    <ScrollView>
      <Box
        paddingLeft="m"
        paddingTop="s"
        justifyContent="flex-end"
        paddingBottom="m"
        style={styles.boxTitle}
        backgroundColor="primary"
      >
        <Text variant="title2" color="white">
          ENGAGEMENTS
        </Text>
      </Box>
      <View style={styles.mainView}>
        <Box
          paddingLeft="m"
          justifyContent="flex-end"
          paddingBottom="m"
          style={styles.boxContainer}
          backgroundColor="primary"
          marginBottom="s"
        ></Box>
        <Box
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          style={styles.boxStyle}
          backgroundColor="lightgray"
        >
          <TouchableOpacity onPress={() => scroll.current?.snapToPrev()}>
            <Text variant="title1" margin="s" style={{ opacity: 0.4 }}>
              {'<'}
            </Text>
          </TouchableOpacity>
          <View style={{ width: width - 100 }}>
            <Carousel
              data={ecologyFacts}
              renderItem={renderItem}
              sliderWidth={width - 100}
              itemWidth={width - 100}
              inactiveSlideShift={0}
              sliderHeight={height / 3}
              itemHeight={height / 3}
              useScrollView={true}
              autoplay={false}
              loop={true}
              ref={scroll}
            />
          </View>
          <TouchableOpacity onPress={() => scroll.current?.snapToNext()}>
            <Text variant="title1" margin="s" style={{ opacity: 0.4 }}>
              {'>'}
            </Text>
          </TouchableOpacity>
        </Box>
        <Box
          alignItems="center"
          marginTop="m"
          paddingTop="m"
          style={styles.boxCommitment}
          justifyContent="center"
          backgroundColor="white"
        >
          <Text variant="title3" margin="s">
            Engagements :
          </Text>
          {engagementsData.map((item, index) => (
            <Tips engagement={item.title} index={index} isEnabled={item.isCommitted} />
          ))}
        </Box>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  boxTitle: {
    width: width,
    height: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
  },
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 10,
  },
  mainView: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#39D697',
  },
  boxStyle: {
    marginBottom: hp('2.5%'),
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('90%'),
    height: 190,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
  },
  boxContainer: {
    width: width,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
  },
  boxCommitment: {
    width: width,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
export default EngagementsScreen;
