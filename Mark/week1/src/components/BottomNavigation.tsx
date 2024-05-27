import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Home from '../screens/Home';
import Setting from '../screens/Setting';
import HomeSvg from '../assets/icon_home.svg';
import SettingSvg from '../assets/icon_setting.svg';
import BtnAddSvg from '../assets/btn_add.svg';
import { TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator<RootTabParamList>();

const BottomNavigation = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handlePress = () => {
    navigation.navigate('AddToDo');
  }

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name='Home' component={Home} options={{
        title: '홈',
        tabBarLabel: '홈',
        tabBarIcon: ({focused}) => (
          <HomeSvg color={focused ? '#FF8F50': '#888888'}/>
        ),
      }}/>

      <Tab.Screen name='AddToDo' component={Home} options={{
        tabBarLabel: () => null,
        tabBarIcon: () => (
          <TouchableOpacity onPress={handlePress}>
            <BtnAddSvg />
          </TouchableOpacity>
        )
      }}/>
      
      <Tab.Screen name='Setting' component={Setting} options={{
        title: '설정',
        tabBarLabel: '설정',
        tabBarIcon: ({focused}) => (
          <SettingSvg color={focused ? '#FF8F50': '#888888'}/>
        ),
      }}/>
    </Tab.Navigator>
  )
}

export default BottomNavigation;
       