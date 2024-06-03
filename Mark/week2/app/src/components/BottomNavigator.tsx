import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import Home from '../screens/Home';
import Stars from '../screens/Stars';
import { HomeSvg } from '../assets/HomeSvg';
import { Palette } from '../constants/palette';
import { StarSvg } from '../assets/StarSvg';

const BottomNavigator = () => {
  const Tab = createBottomTabNavigator<RootTabParamList>();

  return (
    <Tab.Navigator screenOptions={{ tabBarItemStyle: styles.tab }}>
      <Tab.Screen name='Home' component={Home} options={{
        tabBarLabel: '홈',
        tabBarActiveTintColor: Palette.Blue600,
        headerShown: false,
        tabBarIcon: ({focused}) => (
          <HomeSvg width='24' height='24' fill={focused ? Palette.Blue600 : Palette.Gray600}/>
        ),
      }}/>
      
      <Tab.Screen name='Stars' component={Stars} options={{
        tabBarLabel: '즐겨찾기',
        tabBarActiveTintColor: Palette.Blue600,
        headerShown: false,
        tabBarIcon: ({focused}) => (
          <StarSvg width='24' height='24' fill={focused ? Palette.Blue600 : Palette.Gray600}/>
        ),
      }}/>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tab: {
    paddingVertical: 6,
  },
  addBtn: {
    width: 38,
    height: 38,
    alignSelf: 'center'
  },
})

export default BottomNavigator;
       