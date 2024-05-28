import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import Home from '../screens/Home';
import Setting from '../screens/Setting';
import HomeSvg from '../assets/icon_home.svg';
import SettingSvg from '../assets/icon_setting.svg';
import BtnAddSvg from '../assets/btn_add.svg';
import { TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddToDo from '../screens/AddTodo';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name='home' component={Home} options={{
        title: '홈',
        tabBarLabel: '홈',
        tabBarIcon: ({focused}) => (
          <HomeSvg color={focused ? '#FF8F50': '#888888'}/>
        ),
      }}/>

      <Tab.Screen name='AddToDo' component={AddScreenStack} options={{
        tabBarButton: (props) => <BtnAddToDo {...props}/> 
      }}/>
      
      <Tab.Screen name='setting' component={Setting} options={{
        title: '설정',
        tabBarLabel: '설정',
        tabBarIcon: ({focused}) => (
          <SettingSvg color={focused ? '#FF8F50': '#888888'}/>
        ),
      }}/>
    </Tab.Navigator>
  )
}

const AddScreenStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='AddToDo'
        component={AddToDo}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const BtnAddToDo = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    // navigation.navigate();
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <BtnAddSvg />
    </TouchableOpacity>
  )
}

export default BottomNavigation;
       