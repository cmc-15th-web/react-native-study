import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Home from '../screens/Home';
import Setting from '../screens/Setting';
import HomeSvg from '../assets/icon_home.svg';
import SettingSvg from '../assets/icon_setting.svg';
import BtnAddSvg from '../assets/btn_add.svg';
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
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarItemStyle: styles.tab }}>
      <Tab.Screen name='Home' component={Home} options={{
        title: '홈',
        tabBarLabel: '홈',
        tabBarActiveTintColor: color,
        tabBarIcon: ({focused}) => (
          <HomeSvg color={focused ? color: palette.darkGray}/>
        ),
      }}/>

      <Tab.Screen name='AddToDo' component={Home} options={{
        tabBarLabel: () => null,
        tabBarButton: () => (
          <TouchableOpacity style={styles.addBtn} onPress={handlePress}>
            <BtnAddSvg />
          </TouchableOpacity>
        )
      }}/>
      
      <Tab.Screen name='Setting' component={Setting} options={{
        title: '설정',
        tabBarLabel: '설정',
        tabBarActiveTintColor: color,
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
  }
})

export default BottomNavigation;
       