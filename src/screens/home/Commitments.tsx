import React, { useRef } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { Text, Box, useTheme } from '../../components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Tips from './components/Tips';
import { ecologyFacts } from './data/ecologyFacts';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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

  const engagementsData = [
    { title: 'I switch off my devices in standby', isCommitted: appliances },
    { title: 'I reduce heating 1 degree', isCommitted: reduced_heating },
    { title: 'I adopt eco-driving', isCommitted: eco_driving },
    { title: 'I drink tap water instead of bottles', isCommitted: tap_water },
    { title: 'I reduce my food waste', isCommitted: food_wastes },
    { title: 'I do my shopping in bulk', isCommitted: bulk_food },
    { title: 'I have a zero waste approach', isCommitted: zero_wastes },
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
          backgroundColor="secondary"
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
          <Text variant="title3" color="white" margin="s">
            Engagements :
          </Text>
          {engagementsData.map((item, index) => (
            <Tips engagement={item.title} index={index} isEnabled={item.isCommitted} key={index} />
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
