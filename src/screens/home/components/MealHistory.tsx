import React, { useState, useEffect } from 'react';
import { Box, Text } from '../../../components/Theme';
import { StyleSheet, Dimensions, View, Image } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const { width } = Dimensions.get('window');

interface MealHistoryProps {
  type: string;
  amount: number;
  date: string;
}

const MealHistory = ({ type, amount, date }: MealHistoryProps) => {
  const [version, setVersion] = useState({
    image: require(`../../../../assets/images/red_meat.png`),
    name: 'Red Meat',
    color: 'white',
  });

  const imageSource = (type: string) => {
    if (type === 'red_meat') {
      setVersion({
        image: require(`../../../../assets/images/red_meat.png`),
        name: 'Red Meat',
        color: '#ff6361',
      });
    } else if (type === 'white_meat') {
      setVersion({
        image: require(`../../../../assets/images/white_meat.png`),
        name: 'White Meat',
        color: '#bc5090',
      });
    } else if (type === 'vegetarian') {
      setVersion({
        image: require(`../../../../assets/images/Vegetarian.png`),
        name: 'Vegetarian',
        color: '#39D697',
      });
    } else if (type === 'vegan') {
      setVersion({
        image: require(`../../../../assets/images/Vegan.png`),
        name: 'Vegan',
        color: '#58508d',
      });
    }
  };

  useEffect(() => {
    imageSource(type);
  }, []);

  return (
    <Box style={styles.boxContainer} justifyContent="center" marginBottom="s">
      <Box style={styles.viewContainer}>
        <Box style={{ marginLeft: wp('5%') }}>
          <Text variant="body">{new Date(Date.parse(date)).toLocaleDateString()}</Text>
        </Box>
        <Box style={[styles.viewImg, { backgroundColor: version.color }]}>
          <Image
            source={version.image}
            style={[styles.imgStyle, { backgroundColor: version.color }]}
          />
        </Box>
        <Text variant="body" style={{ marginLeft: wp('3%') }}>
          {version.name}
        </Text>
        <Text variant="body" style={{ marginLeft: 'auto', marginRight: wp('5%') }}>
          + {amount} kg
        </Text>
      </Box>
    </Box>
  );
};

export default MealHistory;

const styles = StyleSheet.create({
  boxStyle: {
    width: width,
    height: 80,
    borderBottomWidth: 2,
  },
  boxContainer: {
    marginHorizontal: wp('2%'),
    height: hp('8%'),
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    shadowColor: '#616164',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  textContainer: { marginLeft: wp('5%') },
  viewContainer: { flexDirection: 'row', alignItems: 'center' },
  viewImg: {
    marginLeft: wp('5%'),
    padding: 5,
    borderRadius: 10,
  },
  imgStyle: { height: 24, width: 24, tintColor: 'white' },
});
