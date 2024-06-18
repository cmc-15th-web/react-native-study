import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import {Palette} from '../constants/palette';
import Home from '../screens/Home';
import Setting from '../screens/Setting';
import {HomeSvg} from '../assets/HomeSvg';
import {SettingSvg} from '../assets/SettingSvg';
import AddPhoto from './AddPhoto';

const BottomNavigator = () => {
  const Tab = createBottomTabNavigator<RootTabParamList>();

  return (
    <>
      <Tab.Navigator screenOptions={{tabBarItemStyle: styles.tab}}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: '홈',
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
            tabBarLabel: '설정',
            tabBarActiveTintColor: Palette.Purple,
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
});

export default BottomNavigator;
