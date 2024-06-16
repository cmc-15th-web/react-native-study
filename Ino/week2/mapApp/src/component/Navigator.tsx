import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StarList from '../pages/StarList';
import MyWeb from '../pages/WebView';
import HomeIcon from '../assets/Home';
import Colors from '../Colors';
import StarIcon from '../assets/Star';

const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors.Blue600,
        tabBarInactiveTintColor: Colors.Gray600,
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={MyWeb}
        options={{
          title: '홈',
          tabBarIcon: ({color, size}) => <HomeIcon color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Star"
        component={StarList}
        options={{
          title: '즐겨찾기',
          tabBarIcon: ({color, size}) => <StarIcon color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}
