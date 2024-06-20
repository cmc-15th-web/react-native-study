import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text} from 'react-native';
import {Palette} from '../constants/palette';
import Home from '../screens/Home';
import Setting from '../screens/Setting';
import {HomeSvg} from '../assets/HomeSvg';
import {SettingSvg} from '../assets/SettingSvg';
import AddPhoto from './AddPhoto';
import GradientText from './GradientText';

const BottomNavigator = () => {
  const Tab = createBottomTabNavigator<RootTabParamList>();

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarItemStyle: styles.tab,
          tabBarStyle: styles.tabBar,
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: ({focused}) =>
              focused ? (
                <GradientText
                  style={styles.tabBarLabel}
                  colors={[Palette.Pink, Palette.Purple]}>
                  홈
                </GradientText>
              ) : (
                <Text style={[styles.tabBarLabel, styles.taBarLabelInactive]}>
                  홈
                </Text>
              ),
            tabBarActiveTintColor: Palette.Purple,
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <HomeSvg
                width="18"
                height="19"
                fill={focused ? Palette.GradientPurplePink : Palette.Gray400}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Setting"
          component={Setting}
          options={{
            tabBarLabel: ({focused}) =>
              focused ? (
                <GradientText
                  style={styles.tabBarLabel}
                  colors={[Palette.Pink, Palette.Purple]}>
                  설정
                </GradientText>
              ) : (
                <Text style={[styles.tabBarLabel, styles.taBarLabelInactive]}>
                  설정
                </Text>
              ),
            tabBarActiveTintColor: Palette.Purple,
            tabBarInactiveTintColor: Palette.Gray400,
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <SettingSvg
                width="24"
                height="24"
                fill={focused ? Palette.GradientPurplePink : Palette.Gray400}
              />
            ),
          }}
        />
      </Tab.Navigator>
      <AddPhoto />
    </>
  );
};

const styles = StyleSheet.create({
  tab: {
    paddingVertical: 6,
    backgroundColor: Palette.Black,
  },
  tabBar: {
    borderTopColor: Palette.Gray900,
  },
  tabBarLabel: {
    fontSize: 12,
  },
  taBarLabelInactive: {
    color: Palette.Gray400,
  },
});

export default BottomNavigator;
