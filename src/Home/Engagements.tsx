import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Box } from '../components';
import { Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Tips from '../components/Tips/Tips';
import { ecologyFacts } from '../data/ecologyFacts';
const { width, height } = Dimensions.get('window');

const EngagementsScreen = () => {
  const [dotPag, setDotPag] = useState<number>(1);

  const tipsData = [
    { title: 'Item1' },
    { title: 'Item2' },
    { title: 'Item3' },
    { title: 'Item4' },
    { title: 'Item5' },
    { title: 'Item6' },
    { title: 'Item7' },
    { title: 'Item8' },
  ];

  const engagementsData = [
    { title: 'Item1' },
    { title: 'Item2' },
    { title: 'Item3' },
    { title: 'Item4' },
    { title: 'Item5' },
    { title: 'Item6' },
    { title: 'Item7' },
    { title: 'Item8' },
  ];

  type PropsRenderItem = {
    item: string;
  };
  const renderItem = ({ item }: PropsRenderItem) => {
    return (
      <Text variant="body" color="white" style={{ textAlign: 'center' }}>
        {item}
      </Text>
    );
  };

  return (
    <ScrollView>
      <View style={{ alignItems: 'center', marginTop: height / 15 }}>
        <Box
          alignItems="center"
          style={{ width: width - 30, height: height / 3, borderRadius: 10 }}
          justifyContent="center"
          backgroundColor="primary"
        >
          <Carousel
            data={ecologyFacts}
            renderItem={renderItem}
            sliderWidth={width}
            itemWidth={height / 3}
            inactiveSlideShift={0}
            useScrollView={true}
            onSnapToItem={(index: number) => setDotPag(index)}
            autoplay={false}
          />
          <Pagination
            dotsLength={tipsData.length}
            activeDotIndex={dotPag}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: 'rgba(255, 255, 255, 0.92)',
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
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
