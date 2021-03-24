import React, { useRef, useState } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Box } from '../../components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Tips from './components/Tips';
import { ecologyFacts } from './data/ecologyFacts';
import { useTypedSelector } from '../../hooks/useTypedSelector';
const { width, height } = Dimensions.get('window');

const Commitments = () => {
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

  const [appliancesCommitment, setAppliancesCommitment] = useState(appliances);
  const [reducedHeatingCommitment, setReducedHeatingCommitment] = useState(reduced_heating);
  const [ecoDrivingCommitment, setEcoDrivingCommitment] = useState(eco_driving);
  const [tapWaterCommitment, setTapWaterCommitment] = useState(tap_water);
  const [foodWastesCommitment, setFoodWastesCommitment] = useState(food_wastes);
  const [bulkFoodCommitment, setBulkFoodCommitment] = useState(bulk_food);
  const [zeroWastesCommitment, setZeroWastesCommitment] = useState(zero_wastes);

  const engagementsData = [
    {
      title: 'Switch off my devices in standby',
      isCommitted: appliancesCommitment,
      commitmentId: 1,
      onChangeToggle: setAppliancesCommitment,
    },
    {
      title: 'Reduce heating 1 degree',
      isCommitted: reducedHeatingCommitment,
      commitmentId: 2,
      onChangeToggle: setReducedHeatingCommitment,
    },
    {
      title: 'Adopt eco-driving',
      isCommitted: ecoDrivingCommitment,
      commitmentId: 3,
      onChangeToggle: setEcoDrivingCommitment,
    },
    {
      title: 'I drink tap water instead of bottles',
      isCommitted: tapWaterCommitment,
      commitmentId: 4,
      onChangeToggle: setTapWaterCommitment,
    },
    {
      title: 'Reduce my food waste',
      isCommitted: foodWastesCommitment,
      commitmentId: 5,
      onChangeToggle: setFoodWastesCommitment,
    },
    {
      title: 'Do your shopping in bulk',
      isCommitted: bulkFoodCommitment,
      commitmentId: 6,
      onChangeToggle: setBulkFoodCommitment,
    },
    {
      title: 'A zero waste approach',
      isCommitted: zeroWastesCommitment,
      commitmentId: 7,
      onChangeToggle: setZeroWastesCommitment,
    },
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
              keyExtractor={(item, index) => `key - ${index}${item}`}
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
          <Text variant="title3" color="white" margin="s">
            Engagements :
          </Text>
          {engagementsData.map((item, index) => (
            <Tips
              engagement={item.title}
              index={index}
              isEnabled={item.isCommitted}
              commitmentId={item.commitmentId}
              onChangeToggle={item.onChangeToggle}
              key={index}
            />
          ))}
        </Box>
      </View>
    </ScrollView>
  );
};

export default Commitments;

const styles = StyleSheet.create({
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
    height: 50,
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
