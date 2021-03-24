import React, { useMemo, useRef, useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Animated,
  Platform,
} from 'react-native';
import { VictoryPie } from 'victory-native';
import { Svg } from 'react-native-svg';
import { useTheme } from '../../../components';
import { useTypedSelector } from '../../../hooks';

const EmissionsPie = () => {
  const theme = useTheme();
  const [dateRange, setDateRange] = useState('weekly');

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

  const monthlyData = {
    monthly_landtrip_emissions,
    monthly_airtrip_emissions,
    monthly_alimentation,
    monthly_housing,
    monthly_spendings,
  };

  const weeklyData = {
    weekly_landtrip_emissions,
    weekly_airtrip_emissions,
    weekly_alimentation,
    weekly_housing,
    weekly_spendings,
  };

  const colors = ['#003f5c', '#58508d', '#bc5090', '#ff6361', '#ffa600'];

  const weeklyChartData = useMemo(() => {
    Object.entries(weeklyData)
      .filter(item => item[1] === 0)
      .map((item, index) => {
        const percentage = ((item[1] / weekly_total) * 100).toFixed(0);
        return {
          label: `${percentage}`,
          y: item[1],
          color: colors[index],
          name: item[0],
          id: index,
        };
      });
  }, [weeklyData, weekly_total]);

  const monthlyChartData = useMemo(() => {
    Object.entries(monthlyData)
      .filter(item => item[1] === 0)
      .map((item, index) => {
        const percentage = ((item[1] / monthly_total) * 100).toFixed(0);
        return {
          label: `${percentage}`,
          y: item[1],
          color: colors[index],
          name: item[0],
          id: index,
        };
      });
  }, [monthlyData, monthly_total]);

  const yearlyChartData = useMemo(() => {
    Object.entries(yearlyData)
      .filter(item => item[1] === 0)
      .map((item, index) => {
        const percentage = ((item[1] / yearly_total) * 100).toFixed(0);
        return {
          label: `${percentage}`,
          y: item[1],
          color: colors[index],
          name: item[0],
          id: index,
        };
      });
  }, [yearlyData, yearly_total]);

  function renderChart() {
    // let chartData = processCategoryDataToDisplay();
    // let colorScales = chartData.map(item => item.color);
    // let totalExpenseCount = chartData.reduce((a, b) => a + (b.expenseCount || 0), 0);
  }
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F6F6F6',
        borderRadius: 50,
      }}
    >
      <VictoryPie />
    </View>
  );
};
export default EmissionsPie;
