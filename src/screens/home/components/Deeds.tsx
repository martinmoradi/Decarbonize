import React, { useState } from 'react';
import { Switch, TouchableOpacity } from 'react-native';
import { Box, Text } from '../../../components/Theme';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { AntDesign } from '@expo/vector-icons';

type PropsDeeds = {
  engagement: string;
  index: number;
  isEnabled: boolean;
  description: string;
};

const Deeds = ({ engagement, index, isEnabled, description }: PropsDeeds) => {
  const [toggleInfo, setToggleInfo] = useState(false);

  return (
    <Box
      alignItems="center"
      flexDirection="row"
      marginBottom="s"
      style={{
        width: wp('90%'),
        height: hp('8%'),

        borderRadius: 20,
        shadowColor: '#616164',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,

        elevation: 1,
      }}
      justifyContent="space-between"
      backgroundColor="lightgray"
      key={index}
    >
      <TouchableOpacity
        style={{ position: 'absolute', top: 1, left: 1 }}
        onPress={() => setToggleInfo(!toggleInfo)}
      >
        {!toggleInfo ? (
          <AntDesign name="infocirlceo" size={20} color="#808080" />
        ) : (
          <AntDesign name="closecircleo" size={20} color="#808080" />
        )}
      </TouchableOpacity>
      <Text variant="body" style={{ marginLeft: wp('8%'), fontSize: 15 }}>
        {!toggleInfo ? engagement : description}
      </Text>

      <Switch
        trackColor={{ false: '#003f5c', true: '#39D697' }}
        thumbColor="#f4f3f4"
        ios_backgroundColor="#003f5c"
        value={isEnabled}
      />
    </Box>
  );
};

export default Deeds;
