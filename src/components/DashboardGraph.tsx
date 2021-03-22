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






const DashboardGraph = () => {
  const { data, isEmpty } = useTypedSelector(state => state.emissions);

const [userHousing, setUserHousing] = React.useState(17000);
const [userFood, setUserFood] = React.useState(17000);
const [userSpendings, setUserSpendings] = React.useState(17000);
const [userTravel, setUserTravel] = React.useState(17000);

const recommendedHousing = 7000;
const recommendedFood = 4000;
const recommendedSpendings = 5000;
const recommendedTravel = 10000;


React.useEffect(()=>{

setUserHousing(data.yearly_housing)
setUserFood(data.yearly_alimentation)
setUserSpendings(data.yearly_spendings)
setUserTravel(data.yearly_landtrip_emissions + data.yearly_airtrip_emissions)
},[data])



const housing = [
  { graph: 1, co2Amount: recommendedHousing },
  { graph: 2, co2Amount: userHousing },
];

const food = [
  { graph: 1, co2Amount: recommendedFood },
  { graph: 2, co2Amount: userFood },
];

const spendings = [
  { graph: 1, co2Amount: recommendedSpendings },
  { graph: 2, co2Amount: userSpendings },
];
const travel = [
  { graph: 1, co2Amount: recommendedTravel },
  { graph: 2, co2Amount: userTravel },
];


  return (
    <VictoryChart
      horizontal
      domainPadding={80}
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
        x={50}
        y={20}
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
  );
};

export default DashboardGraph;
