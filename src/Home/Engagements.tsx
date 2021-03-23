import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Box } from '../components';
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
        <Text key={index} variant="body" color="white" style={{ textAlign: 'center' }}>
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
          backgroundColor="primary"
        >
          <Text variant="title1" color="white" margin="s">
            {'<'}
          </Text>
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
            <Tips engagement={item.title} index={index} isEnabled={item.isCommitted} />
          ))}
        </Box>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  mainView: {
    alignItems: 'center',
    marginTop: height / 15,
  },
  boxStyle: {
    width: width - 30,
    height: height / 3,
    borderRadius: 10,
  },
});
export default EngagementsScreen;
