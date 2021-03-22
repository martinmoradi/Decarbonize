import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Box } from '../components';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Tips from '../components/Tips/Tips';
import { ecologyFacts } from '../data/ecologyFacts';
const { width, height } = Dimensions.get('window');

const EngagementsScreen = () => {
  const engagementsData = [
    { title: 'Switch off my devices in standby' },
    { title: 'Reduce heating 1 degree' },
    { title: 'Adopt eco-driving' },
    { title: 'I drink tap water instead of bottles' },
    { title: 'Reduce my food waste' },
    { title: 'Do your shopping in bulk' },
  ];

  type PropsRenderItem = {
    item: string;
  };
  const renderItem = ({ item }: PropsRenderItem) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
        <Text variant="body" color="white" style={{ textAlign: 'center' }}>
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
          <Text variant="title1" color="white" margin="s">
            {'<'}
          </Text>
          <View style={{ width: width - 100 }}>
            <Carousel
              // style={{ flex }}
              data={ecologyFacts}
              renderItem={renderItem}
              sliderWidth={width - 100}
              itemWidth={width - 100}
              inactiveSlideShift={0}
              sliderHeight={height / 3}
              itemHeight={height / 3}
              useScrollView={true}
              onSnapToItem={(index: number) => setDotPag(index)}
              autoplay={false}
              loop={true}
            />
          </View>
          <Text variant="title1" color="white" margin="s">
            {'>'}
          </Text>
        </Box>
        <Box
          marginTop="xl"
          paddingTop="m"
          style={{ width: width - 30, borderRadius: 10 }}
          justifyContent="center"
          backgroundColor="info"
        >
          <Text variant="title3" color="white" margin="s">
            Engagements :{' '}
          </Text>
          {engagementsData.map((item, index) => (
            <Tips engagement={item} index={index} />
          ))}
        </Box>
      </View>
    </ScrollView>
  );
};

export default EngagementsScreen;
