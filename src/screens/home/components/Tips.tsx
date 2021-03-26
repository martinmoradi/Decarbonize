import React, { useState } from 'react';
import { Switch, TouchableOpacity } from 'react-native';
import { Box, Text } from '../../../components/Theme';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { AntDesign } from '@expo/vector-icons';
import { useActions } from '../../../hooks';

type PropsTips = {
  engagement: string;
  index: number;
  isEnabled: boolean;
  commitmentId: number;
  description: string;
  onChangeToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

const Tips = ({
  engagement,
  index,
  isEnabled,
  commitmentId,
  onChangeToggle,
  description,
}: PropsTips) => {
  const { postUserCommitments, delUserCommitments } = useActions();
  const [toggleInfo, setToggleInfo] = useState(false);

  const toggleSwitch = () => {
    isEnabled ? delUserCommitments(commitmentId) : postUserCommitments(commitmentId);
    onChangeToggle(!isEnabled);
  };

  return (
    <Box
      alignItems="center"
      flexDirection="row"
      marginBottom="s"
      style={{ width: wp('90%'), height: hp('8%'), borderBottomWidth: 2, borderRadius: 20 }}
      justifyContent="space-between"
      backgroundColor="lightgray"
      borderBottomColor="white"
      key={index}
    >
      <TouchableOpacity
        style={{ position: 'absolute', left: wp('-1'), top: 1 }}
        onPress={() => setToggleInfo(!toggleInfo)}
      >
        {!toggleInfo ? (
          <AntDesign name="infocirlceo" size={20} color="#808080" />
        ) : (
          <AntDesign name="closecircleo" size={20} color="#808080" />
        )}
      </TouchableOpacity>
      <Text variant="body" style={{ marginLeft: 20, fontSize: 15 }}>
        {!toggleInfo ? engagement : description}
      </Text>

      <Switch
        trackColor={{ false: '#003f5c', true: '#39D697' }}
        thumbColor="#f4f3f4"
        ios_backgroundColor="#003f5c"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </Box>
  );
};

export default Tips;
