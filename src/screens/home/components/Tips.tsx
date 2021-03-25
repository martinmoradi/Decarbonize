import React from 'react';
import { Switch } from 'react-native';
import { Box, Text } from '../../../components/Theme';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useActions } from '../../../hooks';

type PropsTips = {
  engagement: string;
  index: number;
  isEnabled: boolean;
  commitmentId: number;
  onChangeToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

const Tips = ({ engagement, index, isEnabled, commitmentId, onChangeToggle }: PropsTips) => {
  const { postUserCommitments, delUserCommitments } = useActions();

  const toggleSwitch = () => {
    isEnabled ? delUserCommitments(commitmentId) : postUserCommitments(commitmentId);
    onChangeToggle(!isEnabled);
  };

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
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </Box>
  );
};

export default Tips;
