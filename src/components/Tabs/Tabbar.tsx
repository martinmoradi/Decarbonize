import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { block, onChange, set, useCode, Value } from 'react-native-reanimated';
import { timing, withTransition } from 'react-native-redash';
import Chart from './icons/Chart';
import { DURATION, ICON_SIZE, PADDING, SEGMENT } from './icons/Constants';
import Ecology from './icons/Ecology';
import Home from './icons/Home';
import Plus from './icons/Plus';
import Settings from './icons/Settings';
import Particules from './Particules';
import Tab from './Tab';
import Weave from './Weave';

const tabs = [
  { icon: <Home /> },
  { icon: <Ecology /> },
  { icon: <Plus /> },
  { icon: <Chart /> },
  { icon: <Settings /> },
];

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 100,
  },
  tabs: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tab: {
    width: SEGMENT,
    height: ICON_SIZE + PADDING * 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default (props: any) => {
  let currentIndex = props.state.index;
  const { navigation } = props;

  const navigationRoute = ['Dashboard', 'Engagements', 'NewTrip', 'History', 'Settings'];

  const active = new Value<number>(0);
  const transition = withTransition(active, { duration: DURATION });
  const activeTransition = new Value(0);

  useCode(
    () =>
      block([
        onChange(active, set(activeTransition, 0)),
        set(activeTransition, timing({ duration: DURATION })),
      ]),
    [active, activeTransition]
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabs}>
        {tabs.map(({ icon }, index) => (
          <View key={index} style={styles.tab}>
            <Weave {...{ active, transition, index }} />
            <Tab onPress={() => active.setValue(index)} {...{ active, transition, index }}>
              {icon}
            </Tab>
          </View>
        ))}
        <Particules {...{ transition, activeTransition }} />
      </View>
    </SafeAreaView>
  );
};

// before
{
  /* <Tab onPress={() => active.setValue(index)} {...{ active, transition, index }}>
              {icon}
            </Tab> */
}
// after

{
  /* <Tab
              onPress={() => navigation.navigate(navigationRoute[index])}
              {...{ active, transition, index }}
            >
              {icon}
            </Tab> */
}
