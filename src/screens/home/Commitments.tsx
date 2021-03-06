import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useMemo, useRef, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Carousel from 'react-native-snap-carousel';
import { Box, Text, useTheme } from '../../components';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Deeds from './components/Deeds';
import { ecologyFacts } from './data/ecologyFacts';

const { width, height } = Dimensions.get('window');

const Commitments = () => {
  const theme = useTheme();

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

  const engagementsData = useMemo(
    () => [
      {
        title: 'I switch off my devices in standby.',
        description: 'Prevent 6.2kg of carbon emissions.',
        isCommitted: appliancesCommitment,
        commitmentId: 1,
        onChangeToggle: setAppliancesCommitment,
      },
      {
        title: 'I turn down the heating by 1°C',
        description: 'Prevent 201.6kg of carbon emissions.',
        isCommitted: reducedHeatingCommitment,
        commitmentId: 2,
        onChangeToggle: setReducedHeatingCommitment,
      },
      {
        title: 'I adopt eco-driving.',
        description: 'Reduce all cars emissions by 15%.',
        isCommitted: ecoDrivingCommitment,
        commitmentId: 3,
        onChangeToggle: setEcoDrivingCommitment,
      },
      {
        title: 'I drink tap water instead of bottles.',
        description: 'Prevent 215kg of carbon emissions.',
        isCommitted: tapWaterCommitment,
        commitmentId: 4,
        onChangeToggle: setTapWaterCommitment,
      },
      {
        title: 'I reduce my food waste',
        description: 'Prevent 31kg of carbon emissions.',
        isCommitted: foodWastesCommitment,
        commitmentId: 5,
        onChangeToggle: setFoodWastesCommitment,
      },
      {
        title: 'I do my shopping in bulk',
        description: 'Save 35kg of carbon emissions.',
        isCommitted: bulkFoodCommitment,
        commitmentId: 6,
        onChangeToggle: setBulkFoodCommitment,
      },
      {
        title: 'I have a zero waste approach',
        description: 'Prevent 707.67kg of carbon emissions.',
        isCommitted: zeroWastesCommitment,
        commitmentId: 7,
        onChangeToggle: setZeroWastesCommitment,
      },
    ],
    [
      zeroWastesCommitment,
      bulkFoodCommitment,
      foodWastesCommitment,
      tapWaterCommitment,
      reducedHeatingCommitment,
      appliancesCommitment,
    ]
  );

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
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          style={styles.boxStyle}
          backgroundColor="lightgray"
        >
          <TouchableOpacity onPress={() => scroll.current?.snapToPrev()}>
            <Text variant="title1" margin="s" style={{ opacity: 0.4 }}>
              <AntDesign name="doubleleft" size={24} color="black" />
            </Text>
          </TouchableOpacity>
          <View style={{ width: width - 100 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text variant="subHeroHome" style={{ position: 'absolute', top: hp('-5%') }}>
                Did you <Text style={{ color: theme.colors.primary }}>know</Text> ?{' '}
                <MaterialCommunityIcons name="head-question-outline" size={24} color="#F6F6F6" />
              </Text>
            </View>
            <Carousel
              data={ecologyFacts}
              renderItem={renderItem}
              sliderWidth={width - 100}
              itemWidth={width - 100}
              inactiveSlideShift={0}
              sliderHeight={height / 3}
              itemHeight={height / 3}
              keyExtractor={(item, index) => `key - ${index}${item}`}
              useScrollView={true}
              autoplay={false}
              loop={true}
              ref={scroll}
            />
          </View>
          <TouchableOpacity onPress={() => scroll.current?.snapToNext()}>
            <Text variant="title1" margin="s" style={{ opacity: 0.4 }}>
              <AntDesign name="doubleright" size={24} color="black" />
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
          <View>
            <Text variant="subHeroDark" color="text">
              Take a <Text color="primary">pledge</Text>
            </Text>
          </View>
          <View style={{ marginBottom: hp('3%') }}>
            <Text variant="title3" color="text">
              and reduce your annual emissions{' '}
              <MaterialCommunityIcons name="tree-outline" size={24} color="#39D697" />
            </Text>
          </View>

          {engagementsData.map((item, index) => (
            <Deeds
              engagement={item.title}
              index={index}
              isEnabled={item.isCommitted}
              commitmentId={item.commitmentId}
              onChangeToggle={item.onChangeToggle}
              description={item.description}
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
    backgroundColor: '#0C0D34',
  },
  boxStyle: {
    marginBottom: hp('2.5%'),
    marginTop: hp('12%'),
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
    marginBottom: '20%',
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
