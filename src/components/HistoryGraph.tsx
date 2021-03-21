import React from 'react';
import { VictoryLine, VictoryChart, VictoryScatter, VictoryAxis, VictoryLegend } from 'victory-native';
import { VictoryCustomTheme } from '.';

const data = [
  { x: 1, y: 5050 },
  { x: 2, y: 4555 },
  { x: 3, y: 5789 },
  { x: 4, y: 5670 },
  { x: 5, y: 6001 },
  { x: 6, y: 7001 },
  { x: 7, y: 5001 },
  { x: 8, y: 6441 },
  { x: 9, y: 6441 },
  { x: 10, y: 7441 },
  { x: 11, y: 8441 },
];

const HistoryGraph = () => {
  return (
    <VictoryChart
      theme={VictoryCustomTheme}
      animate={{
        duration: 1000,
      }}
      style={{}}
      
    >
      <VictoryAxis style={{ grid: { stroke: 'transparent' } }} />
      <VictoryAxis
        dependentAxis
        style={{ axis: { stroke: 'transparent' }, grid: { stroke: 'grey' } }}
      />
      <VictoryLine
        style={{
          data: { strokeWidth: 3 },
        }}
        data={data}
      />
      <VictoryScatter data={data} size={4} />
    </VictoryChart>
  );
};

export default HistoryGraph;
