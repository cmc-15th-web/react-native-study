import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Setting from './Setting';
import AddButton from './AddButton';

const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="CMC의 앨범"
        component={Home}
        options={{
          title: '홈',
        }}
      />
      <Tab.Screen
        name="+"
        component={AddButton}
        options={{
          title: '+',
          tabBarButton: () => <AddButton />,
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          title: '세팅',
        }}
      />
    </Tab.Navigator>
  );
}
