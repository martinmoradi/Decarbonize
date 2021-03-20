import React, { useState } from 'react';
import { Dimensions, Switch } from 'react-native';
import { Box, Text } from '../Theme';
const { width, height } = Dimensions.get('window');

type PropsTips = {
  engagement: { title: string };
  index: number;
};

const Tips = ({ engagement, index }: PropsTips) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      style={{ width: width - 30, height: 50, borderBottomWidth: 2 }}
      justifyContent="space-between"
      backgroundColor="primary"
      borderBottomColor="white"
      key={index}
    >
      <Text variant="title3" color="white">
        {' '}
        {engagement.title}
      </Text>
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
