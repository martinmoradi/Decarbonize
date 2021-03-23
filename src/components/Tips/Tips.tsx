import React, { useState } from 'react';
import { Dimensions, Switch } from 'react-native';
import { Box, Text } from '../Theme';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const { width } = Dimensions.get('window');

type PropsTips = {
  engagement: string;
  index: number;
  isEnabled: boolean;
};

const Tips = ({ engagement, index, isEnabled }: PropsTips) => {
  // const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      style={{ width: wp('90%'), height: 70, borderBottomWidth: 2, borderRadius: 20 }}
      justifyContent="space-between"
      backgroundColor="lightgray"
      borderBottomColor="white"
      key={index}
    >
      <Text variant="title3"> {engagement}</Text>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        // onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </Box>
  );
};

export default Tips;
