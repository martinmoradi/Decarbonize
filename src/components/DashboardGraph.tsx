import React from 'react';
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryStack,
  VictoryAxis,
  VictoryLegend,
} from 'victory-native';

const recoHousing = 20000;
const recoFood = 20000;
const recoSpendings = 10000;
const recoTravel = 20000;

const youHousing = 17000;
const youFood = 12500;
const youSpendings = 13250;
const youTravel = 13250;

const housing = [
  { graph: 1, co2Amount: recoHousing },
  { graph: 2, co2Amount: youHousing },
];

const food = [
  { graph: 1, co2Amount: recoFood },
  { graph: 2, co2Amount: youFood },
];

const spendings = [
  { graph: 1, co2Amount: recoSpendings },
  { graph: 2, co2Amount: youSpendings },
];
const travel = [
  { graph: 1, co2Amount: recoTravel },
  { graph: 2, co2Amount: youTravel },
];

const DashboardGraph = () => {
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
