import React from 'react';
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryStack,
  VictoryAxis,
  VictoryLegend,
} from 'victory-native';
import { useTypedSelector } from '../hooks';
import { Box, TextButton } from '../components';



const DashboardGraph = () => {
const { data } = useTypedSelector(state => state.emissions);
const[userData, setUserData]=React.useState({userHousing: data.yearly_housing, userFood: data.yearly_alimentation, userSpendings: data.yearly_spendings, userTravel: data.yearly_landtrip_emissions + data.yearly_airtrip_emissions})
const[recommendedData, setRecommendedData] = React.useState({recommendedHousing: 1700, recommendedFood: 1700, recommendedSpendings: 1700, recommendedTravel:1700})


const switchYearly = ()=>{
  setUserData({userHousing: data.yearly_housing, userFood: data.yearly_alimentation, userSpendings: data.yearly_spendings, userTravel: data.yearly_landtrip_emissions + data.yearly_airtrip_emissions})
  setRecommendedData({recommendedHousing: 1700, recommendedFood: 1700, recommendedSpendings: 1700, recommendedTravel:1700})
}

const switchMonthly = ()=>{
  setUserData({userHousing: data.monthly_housing, userFood: data.monthly_alimentation, userSpendings: data.monthly_spendings, userTravel: data.monthly_landtrip_emissions + data.monthly_airtrip_emissions})
  setRecommendedData({recommendedHousing: 170, recommendedFood: 170, recommendedSpendings: 170, recommendedTravel:170})
}

//// IL MANQUE WEEKLY_ALIMENTATION DANS LE STATE
const switchWeekly = ()=>{
  setUserData({userHousing: data.weekly_housing, userFood: data.monthly_alimentation, userSpendings: data.weekly_spendings, userTravel: data.weekly_landtrip_emissions + data.weekly_airtrip_emissions})
  setRecommendedData({recommendedHousing: 50, recommendedFood: 50, recommendedSpendings: 50, recommendedTravel:50})
}

React.useEffect(()=>{
switchYearly()
},[data])



const housing = [
  { graph: 1, co2Amount: recommendedData.recommendedHousing },
  { graph: 2, co2Amount: userData.userHousing },
];

const food = [
  { graph: 1, co2Amount: recommendedData.recommendedFood },
  { graph: 2, co2Amount: userData.userFood },
];

const spendings = [
  { graph: 1, co2Amount: recommendedData.recommendedSpendings },
  { graph: 2, co2Amount: userData.userSpendings },
];
const travel = [
  { graph: 1, co2Amount: recommendedData.recommendedTravel },
  { graph: 2, co2Amount: userData.userTravel },
];


  return (
    <Box>
    <VictoryChart
      horizontal
      domainPadding={100}
      theme={VictoryTheme.material}
      animate={{
        duration: 1000,
      }}
    >
      <VictoryAxis tickValues={[1, 2]} tickFormat={['Reco', 'You']} />
      <VictoryAxis dependentAxis tickFormat={x => `${x / 1000}k`} />
      <VictoryStack>
        <VictoryBar data={housing} x="graph" y="co2Amount" />
        <VictoryBar data={food} x="graph" y="co2Amount" />
        <VictoryBar data={spendings} x="graph" y="co2Amount" />
        <VictoryBar cornerRadius={{ top: 15 }} data={travel} x="graph" y="co2Amount" />
      </VictoryStack>
      <VictoryLegend
        x={20}
        y={10}
        orientation="horizontal"
        gutter={20}
        data={[
          { name: 'Housing', symbol: { fill: 'tomato' } },
          { name: 'Food', symbol: { fill: 'gold' } },
          { name: 'Spendings', symbol: { fill: 'lightgreen' } },
          { name: 'Travel', symbol: { fill: 'green' } },
        ]}
      />


    </VictoryChart>
    <Box style={{flexDirection:"row" ,justifyContent: 'center'}}>
    <TextButton label="Yearly" onPress={switchYearly} style={{width:60, margin: 5}}/>
    <TextButton label="Monthly" onPress={switchMonthly} style={{width:60, margin: 5}}/>
    <TextButton label="Weekly" onPress={switchWeekly} style={{width:60, margin: 5}}/>
    </Box>
    </Box>
  );
};

export default DashboardGraph;
