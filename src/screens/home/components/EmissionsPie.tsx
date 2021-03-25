import React, { useMemo, useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import { VictoryPie } from 'victory-native';
import { useTheme, Text, Box } from '../../../components';
import { useTypedSelector } from '../../../hooks';

const EmissionsPie = () => {
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
    weekly_travel_emissions,
    monthly_travel_emissions,
    yearly_travel_emissions,
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
    yearly_landtrip_emissions,
    yearly_airtrip_emissions,
    yearly_alimentation,
    yearly_housing,
    yearly_spendings,
  };

  const monthlyData = [
    monthly_landtrip_emissions,
    monthly_airtrip_emissions,
    monthly_alimentation,
    monthly_housing,
    monthly_spendings,
  ];

  const weeklyData = {
    weekly_landtrip_emissions,
    weekly_airtrip_emissions,
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
  const [data, setData] = useState<DataType[]>(weeklyChartData);
  const [selectedCategory, setSelectedCategory] = useState<number>();

  useEffect(() => {
    if (selectedRange === 0) setData(weeklyChartData);
    if (selectedRange === 1) setData(monthlyChartData);
    if (selectedRange === 2) setData(yearlyChartData);
  }, [setData, selectedRange]);

  const generateTotalEmissions = () => {
    if (selectedRange === 0) {
      return (
        <View style={{ position: 'absolute', top: '45%', left: '41%' }}>
          <Text variant="pieChart">{weekly_total}</Text>
          <Text marginTop="s" style={styles.subPie}>
            kg
          </Text>
        </View>
      );
    }
    if (selectedRange === 1) {
      return (
        <View style={{ position: 'absolute', top: '45%', left: '36%' }}>
          <Text variant="pieChart">{monthly_total}</Text>
          <Text marginTop="s" style={styles.subPie}>
            kg
          </Text>
        </View>
      );
    }
    if (selectedRange === 2) {
      return (
        <View style={{ position: 'absolute', top: '45%', left: '35%' }}>
          <Text variant="pieChart">{yearly_total}</Text>
          <Text marginTop="s" style={styles.subPie}>
            kg
          </Text>
        </View>
      );
    }
    return null;
  };

  const generateLabels = () => {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            height: 40,
            paddingHorizontal: 12,
            borderRadius: 10,
            backgroundColor: item.color,
          }}
        >
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
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

  const buttons = ['This week', 'This month', 'This year'];

  return (
    <>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F3F4F6',
          borderRadius: 50,
        }}
      >
        <Text variant="title2" marginTop="m" marginBottom="m" style={styles.h2}>
          Your <Text color="primary">carbon</Text> emissions tracker
        </Text>
        <ButtonGroup
          onPress={(index: number) => setSelectedRange(index)}
          selectedIndex={selectedRange}
          buttons={buttons}
          selectedButtonStyle={theme.slideStyle.buttonStyle}
          textStyle={{ textAlign: 'center' }}
          containerStyle={{ borderWidth: 0 }}
          innerBorderStyle={{ width: 0 }}
        />
        <View>
          <VictoryPie
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
            labelRadius={(width * 0.4 + 70) / 2.5}
            style={{
              labels: { fill: 'white', ...styles.label },
            }}
          />
          {generateTotalEmissions()}
        </View>
      </View>
      {generateLabels()}
    </>
  );
};

export default EmissionsPie;

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
    color: '#0C0D34',
  },
  title1: {
    fontSize: 28,
    color: '#0C0D34',
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
