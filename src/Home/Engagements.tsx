import React, { useRef } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Box, Button } from '../components';
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
      <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
        <Text key={index} variant="body" color="white" style={{ textAlign: 'center' }}>
          {item}
        </Text>
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={{ alignItems: 'center', marginTop: height / 15 }}>
        <Box
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          style={{ width: width - 30, height: height / 3, borderRadius: 10 }}
          backgroundColor="primary"
        >
          <TouchableOpacity onPress={() => scroll.current?.snapToPrev()}>
            <Text variant="title1" color="white" margin="s">
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
            <Text variant="title1" color="white" margin="s">
              {'>'}
            </Text>
          </TouchableOpacity>
        </Box>
        <Box
          marginTop="xl"
          paddingTop="m"
          style={{ width: width - 30, borderRadius: 10 }}
          justifyContent="center"
          backgroundColor="info"
        >
          <Text variant="title3" color="white" margin="s">
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

export default EngagementsScreen;
