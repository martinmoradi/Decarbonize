import React, { useMemo } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { block, onChange, set, useCode, Value } from 'react-native-reanimated';
import { timing, withTransition } from 'react-native-redash';
import Chart from './icons/Chart';
import { DURATION, ICON_SIZE, PADDING, SEGMENT } from './icons/Constants';
import Ecology from './icons/Ecology';
import Home from './icons/Home';
import Plus from './icons/Plus';
import Settings from './icons/Settings';

import Tab from './Tab';
import Weave from './Weave';

const Tabbar = (props: any) => {

  const tabs = useMemo(
    () => [
      { icon: <Home /> },
      { icon: <Ecology /> },
      { icon: <Plus /> },
      { icon: <Chart /> },
      { icon: <Settings /> },
    ],
    []
  );
  const navigationRoute = useMemo(
    () => ['Dashboard', 'Engagements', 'NewTripNavigator', 'History', 'Settings'],
    []
  );

  const currentIndex = props.state.index;
  const { navigation } = props;

  const active = new Value<number>(currentIndex);
  const transition = withTransition(active, { duration: DURATION });
  const activeTransition = new Value(currentIndex);

  useCode(
    () =>
      block([
        onChange(active, set(activeTransition, 0)),
        set(activeTransition, timing({ duration: DURATION })),
      ]),
    [active, activeTransition]
  );

  const handlePress = (index: number) => {
    navigation.navigate(navigationRoute[index]);
    active.setValue(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabs}>
        {tabs.map(({ icon }, index) => (
          <View key={index} style={styles.tab}>
            <Weave {...{ active, transition, index }} />
            <Tab onPress={() => handlePress(index)} {...{ active, transition, index }}>
              {icon}
            </Tab>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Tabbar;
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
