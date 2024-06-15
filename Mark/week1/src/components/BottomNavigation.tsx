import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Home from '../screens/Home';
import Setting from '../screens/Setting';
import HomeSvg from '../assets/icon_home.svg';
import SettingSvg from '../assets/icon_setting.svg';
import BtnAddSvg from '../assets/icon_add.svg';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useStore } from '../store/store';
import palette from '../constants/palette';

const Tab = createBottomTabNavigator<RootTabParamList>();

const BottomNavigation = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const color = useStore((state) => state.color);

  const handlePress = () => {
    navigation.navigate('AddToDo');
  }

  return (
    <Tab.Navigator screenOptions={{ tabBarItemStyle: styles.tab }}>
      <Tab.Screen name='Home' component={Home} options={{
        title: 'Today',
        tabBarLabel: '홈',
        tabBarActiveTintColor: color,
        headerStyle: {
          backgroundColor: 'rgb(242,242,242)',
        },
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: color,
          fontSize: 18,
          fontWeight: 500,
        },
        tabBarIcon: ({focused}) => (
          <HomeSvg color={focused ? color: palette.darkGray}/>
        ),
      }}/>

      <Tab.Screen name='AddToDo' component={Home} options={{
        tabBarLabel: () => null,
        tabBarButton: () => (
          <TouchableOpacity style={styles.addBtn} onPress={handlePress}>
            <BtnAddSvg color={color}/>
          </TouchableOpacity>
        )
      }}/>
      
      <Tab.Screen name='Setting' component={Setting} options={{
        title: '설정',
        tabBarLabel: '설정',
        tabBarActiveTintColor: color,
        headerStyle: {
          backgroundColor: 'rgb(242,242,242)',
        },
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: color,
          fontSize: 18,
          fontWeight: 500,
        },
        tabBarIcon: ({focused}) => (
          <SettingSvg color={focused ? color: palette.darkGray}/>
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

export default BottomNavigation;
       