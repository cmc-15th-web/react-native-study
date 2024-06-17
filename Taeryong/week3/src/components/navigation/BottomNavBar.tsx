import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, TouchableOpacity} from 'react-native';
import HomeScreen from '@/screens/Home';
import SettingScreen from '@/screens/Setting';
import AddIcon from '@/assets/icons/Add.svg';
import useModalStore from '@/store/modalStore';
import Colors from '@/constants/Colors';
import HomeIcon from '@/assets/icons/Home.svg';
import SettingIcon from '@/assets/icons/Theme.svg';

const Tab = createBottomTabNavigator();

const BottomNavBar = () => {
  const toggleModal = useModalStore(state => state.toggleModal);

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: Colors.Pink,
          tabBarInactiveTintColor: Colors.Gray400,
          headerStyle: styles.header,
          tabBarStyle: styles.tabBar,
          headerTitleAlign: 'left',
          headerTitleStyle: styles.headerTitleContainer,
        }}>
        <Tab.Screen
          name="홈"
          component={HomeScreen}
          options={{
            headerTitle: 'Taeryong님의 사진첩',
            tabBarIcon: ({color}) => <HomeIcon fill={color} />,
          }}
        />
        <Tab.Screen
          name="설정"
          component={SettingScreen}
          options={{
            headerTitle: '설정',
            tabBarIcon: ({color}) => <SettingIcon fill={color} />,
          }}
        />
      </Tab.Navigator>
      <TouchableOpacity style={styles.container} onPress={() => toggleModal()}>
        <AddIcon />
      </TouchableOpacity>
    </>
  );
};

export default BottomNavBar;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.Gray900,
    borderBottomColor: 'transparent',
    elevation: 0,
    shadowOpacity: 0,
  },
  tabBar: {
    backgroundColor: Colors.Gray900,
    // 매우 얇은 선
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.Pink,
  },
  container: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 50,
  },
  headerTitleContainer: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.Pink,
  },
});
