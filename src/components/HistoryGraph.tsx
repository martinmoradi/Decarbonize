import React from 'react';
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory-native';



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
    <VictoryChart theme={VictoryTheme.material}      animate={{
        duration: 1000,
      }}>
      <VictoryLine
        style={{
          data: { stroke: '#c43a31', strokeWidth: 5 },
        }}
        data={data}
      />
    </VictoryChart>
  );
};

export default HistoryGraph;
