import React, { useMemo, useState } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import { VictoryPie } from 'victory-native';
import { useTheme, Text, Box } from '../../../components';
import { useTypedSelector } from '../../../hooks';
import { Svg } from 'react-native-svg';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const EmissionsPieAndroid = () => {
  const theme = useTheme();
  const { height, width } = theme.dimensions;

  const {
    weekly_total,
    monthly_total,
    yearly_total,
    weekly_landtrip_emissions,
    monthly_landtrip_emissions,
    yearly_landtrip_emissions,
    weekly_airtrip_emissions,
    monthly_airtrip_emissions,
    yearly_airtrip_emissions,
    weekly_alimentation,
    monthly_alimentation,
    yearly_alimentation,
    weekly_housing,
    monthly_housing,
    yearly_housing,
    weekly_spendings,
    monthly_spendings,
    yearly_spendings,
  } = useTypedSelector(state => state.emissions.data);

  const yearlyData = {
    yearly_trips: yearly_landtrip_emissions,
    'yearly_air trips': yearly_airtrip_emissions,
    yearly_alimentation,
    yearly_housing,
    yearly_spendings,
  };

  const monthlyData = {
    monthly_trips: monthly_landtrip_emissions,
    'monthly_air trips': monthly_airtrip_emissions,
    monthly_alimentation,
    monthly_housing,
    monthly_spendings,
  };

  const weeklyData = {
    monthly_trips: weekly_landtrip_emissions,
    'monthly_air trips': weekly_airtrip_emissions,
    weekly_alimentation,
    weekly_housing,
    weekly_spendings,
  };

  interface DataType {
    label: string;
    y: number;
    color: string;
    name: string;
    id: number;
  }

  // Prepare data for chart
  const weeklyChartData = useMemo(() => {
    const data: DataType[] = Object.entries(weeklyData)
      .filter(item => item[1] !== 0)
      .map((item, index) => {
        const percentage = ((item[1] / weekly_total) * 100).toFixed(0);
        return {
          label: `${percentage}%`,
          y: item[1],
          color: theme.chartPalette[index],
          name: item[0],
          id: index + 1,
        };
      });
    return data;
  }, [weeklyData, weekly_total]);

  const monthlyChartData = useMemo(() => {
    const data: DataType[] = Object.entries(monthlyData)
      .filter(item => item[1] !== 0)
      .map((item, index) => {
        const percentage = ((item[1] / monthly_total) * 100).toFixed(0);
        return {
          label: `${percentage}%`,
          y: item[1],
          color: theme.chartPalette[index],
          name: item[0],
          id: index + 1,
        };
      });
    return data;
  }, [monthlyData, monthly_total]);

  const yearlyChartData = useMemo(() => {
    const data: DataType[] = Object.entries(yearlyData)
      .filter(item => item[1] !== 0)
      .map((item, index) => {
        const percentage = ((item[1] / yearly_total) * 100).toFixed(0);
        return {
          label: `${percentage}%`,
          y: item[1],
          color: theme.chartPalette[index],
          name: item[0],
          id: index + 1,
        };
      });
    return data;
  }, [yearlyData, yearly_total]);

  const [selectedRange, setSelectedRange] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<number>();
  const buttons = ['This week', 'This month', 'This year'];

  const selectData = () => {
    switch (selectedRange) {
      case 0:
        return weeklyChartData;
      case 1:
        return monthlyChartData;
      case 2:
        return yearlyChartData;
      default:
        return weeklyChartData;
    }
  };

  const data = selectData();

  // Generate Emissions Inside Chart
  const generateTotalEmissions = () => {
    if (selectedRange === 0) {
      return (
        <View style={{ position: 'absolute', top: '40%', left: '39%' }}>
          <Text variant="pieChart">{weekly_total}</Text>
          <Text marginTop="s" style={styles.subPie}>
            kg
          </Text>
        </View>
      );
    }
    if (selectedRange === 1) {
      return (
        <View style={{ position: 'absolute', top: '40%', left: '37%' }}>
          <Text variant="pieChart">{monthly_total}</Text>
          <Text marginTop="s" style={styles.subPie}>
            kg
          </Text>
        </View>
      );
    }
    if (selectedRange === 2) {
      return (
        <View style={{ position: 'absolute', top: '40%', left: '35%' }}>
          <Text variant="pieChart">{yearly_total}</Text>
          <Text marginTop="s" style={styles.subPie}>
            kg
          </Text>
        </View>
      );
    }
    return null;
  };

  const formatLabelName = (name: string) => {
    const formatted = name.substring(name.indexOf('_') + 1);
    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  };

  const generateLabels = () => {
    interface Item {
      item: DataType;
    }
    const renderItem = ({ item }: Item) => {
      return (
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            height: 40,
            marginBottom: 4,
            paddingHorizontal: 12,
            borderRadius: 10,
            marginHorizontal: 12,
            backgroundColor:
              selectedCategory && selectedCategory === item.id ? item.color : 'transparent',
          }}
          onPress={() => setSelectedCategory(item.id)}
        >
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 5,
                backgroundColor:
                  selectedCategory && selectedCategory === item.id ? 'white' : item.color,
              }}
            ></View>
            <Text
              style={{
                color:
                  selectedCategory && selectedCategory === item.id ? 'white' : theme.colors.text,
                marginLeft: 8,
                fontSize: 16,
                lineHeight: 16,
              }}
            >
              {formatLabelName(item.name)}
            </Text>
          </View>

          <View style={{ justifyContent: 'center' }}>
            <Text
              style={{
                color:
                  selectedCategory && selectedCategory === item.id ? 'white' : theme.colors.text,
                marginRight: 8,
                fontSize: 16,
                lineHeight: 16,
              }}
            >
              {item.y} kg - {item.label}
            </Text>
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <Box style={{ maxHeight: hp('40%'), marginTop: hp('-5%') }}>
        <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.name} />
      </Box>
    );
  };

  // Main Return
  return (
    <View>
      <View
        style={{
          backgroundColor: theme.colors.background2,
          borderRadius: 50,
          marginTop: '8%',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <View style={{ alignItems: 'center' }}>
          <Text variant="titleCard" marginTop="xl" marginBottom="m" style={styles.h2}>
            Your <Text color="primary">carbon</Text> emissions
          </Text>
        </View>
        <ButtonGroup
          onPress={(index: number) => setSelectedRange(index)}
          selectedIndex={selectedRange}
          buttons={buttons}
          selectedButtonStyle={theme.slideStyle.buttonStyle}
          textStyle={{ textAlign: 'center', fontSize: 16 }}
          containerStyle={{ borderWidth: 0, backgroundColor: 'transparent' }}
          innerBorderStyle={{ width: 0 }}
        />
        <View style={{ marginBottom: hp('-5%') }}>
          <Svg width={width} height={width} style={{ width: '100%', height: 'auto' }}>
            <VictoryPie
              standalone={false} // Android workaround
              data={data}
              innerRadius={70}
              radius={({ datum }) =>
                selectedCategory && selectedCategory === datum.id ? width * 0.4 : width * 0.4 - 10
              }
              labels={datum => `${datum.y}`}
              colorScale={theme.chartPalette}
              width={width}
              events={[
                {
                  target: 'data',
                  eventHandlers: {
                    onPress: () => {
                      return [
                        {
                          target: 'labels',
                          mutation: props => {
                            setSelectedCategory(data[props.index].id);
                          },
                        },
                      ];
                    },
                  },
                },
              ]}
              height={height * 0.5}
              labelRadius={(width * 0.45 + 70) / 2.5}
              style={{
                labels: { fill: 'white', ...styles.label },
              }}
            />
          </Svg>
          {generateTotalEmissions()}
        </View>
        {generateLabels()}
      </View>
    </View>
  );
};

export default EmissionsPieAndroid;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  label: {
    fontSize: 18,
    lineHeight: 22,
  },
  h1: {
    lineHeight: 36,
    fontSize: 30,
  },
  h2: {
    color: 'rgba(54, 54, 83, 0.7)',
  },
  title1: {
    fontSize: 28,
    color: 'rgba(54, 54, 83, 0.7)',
  },
  pieChart: {
    fontSize: 26,
    lineHeight: 26,
    textAlign: 'center',
  },
  subPie: {
    fontSize: 18,
    lineHeight: 18,
    textAlign: 'center',
  },
});
