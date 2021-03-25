import React from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import { Box, Text } from '../../../components';

const PieLabels = ({ data }) => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View
            style={{ width: 20, height: 20, backgroundColor: item.color, borderRadius: 5 }}
          ></View>
          <Text>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <Box>
      <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.name} />
    </Box>
  );
};

export default PieLabels;
