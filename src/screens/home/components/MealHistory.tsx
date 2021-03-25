import React from 'react';
import { Box, Text } from '../../../components/Theme';
import { StyleSheet, Dimensions, View, Image } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const { width } = Dimensions.get('window');

interface MealHistoryProps {
  type: string;
  amount: number;
  date: string;
}

const MealHistory = (props: MealHistoryProps) => {
    const [version, setVersion] = React.useState({ image: require(`../../../../assets/images/red_meat.png`), name: 'Red Meat'});

  const imageSource = (type: string) => {
    if (type === 'red_meat') {
      setVersion({image: require(`../../../../assets/images/red_meat.png`), name: 'Red Meat'});
    } else if (type === 'white_meat') {
      setVersion({image: require(`../../../../assets/images/white_meat.png`), name: 'White Meat'});
    } else if (type === 'vegetarian') {
      setVersion({image: require(`../../../../assets/images/Vegetarian.png`), name: 'Vegetarian'});
    } else if (type === 'vegan') {
      setVersion({image: require(`../../../../assets/images/Vegan.png`), name: 'Vegan'});
    }
  };

  React.useEffect(() => {
      imageSource(props.type)
  }, [])



  return (
    <Box
      style={styles.boxContainer}
      justifyContent="center"
      backgroundColor="lightgray"
      borderBottomColor="white"
    >
      <View style={styles.viewContainer}>
        <View style={{ marginLeft: wp('5%') }}>
          <Text variant="body">{new Date(Date.parse(props.date)).toLocaleDateString()}</Text>
        </View>
        <View style={styles.viewImg}>
          <Image source={version.image} style={styles.imgStyle} />
        </View>
        <View style={{ marginLeft: wp('5%') }}>
          <Text variant="header">{version.name}</Text>
        </View>
        <View style={{ marginLeft: wp('5%') }}>
          <Text variant="header">+ {props.amount}kg Co2</Text>
        </View>
      </View>
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
    width: wp('100%'),
    height: 60,
    borderBottomWidth: 2,
    borderRadius: 20,
  },
  viewContainer: { marginLeft: wp('1%'), flexDirection: 'row', alignItems: 'center' },
  viewImg: {
    marginLeft: wp('5%'),
    padding: 5,
    borderRadius: 10,
    backgroundColor:'#39D697'
  },
  imgStyle: { height: 24, width: 24, tintColor: 'white',  backgroundColor: '#39D697' },
});