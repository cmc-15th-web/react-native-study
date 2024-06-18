import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import HomeScreen from '@/screens/Home';
import SettingScreen from '@/screens/Setting';
import AddIcon from '@/assets/icons/Add.svg';
import useModalStore from '@/store/modalStore';
import Colors from '@/constants/Colors';
import HomeIcon from '@/assets/icons/Home.svg';
import GradientHomeIcon from '@/assets/icons/GradientHome.svg';
import SettingIcon from '@/assets/icons/Theme.svg';
import GradientSettingIcon from '@/assets/icons/GradientTheme.svg';
import GradientText from '@/components/common/GradientText';
import CustomModal from '../modal/CustomModal';
import {BottomTabParamList} from '@/types/navigation';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomNavBar = () => {
  const toggleModal = useModalStore(state => state.toggleModal);

  const headerTitleGradient = () => {
    return (
      <GradientText style={styles.headerTitleContainer}>
        Taeryong님의 사진첩
      </GradientText>
    );
  };

  const TabBarLabel = ({focused, label}: {focused: boolean; label: string}) => {
    return focused ? (
      <GradientText style={styles.labelText}>{label}</GradientText>
    ) : (
      <Text style={[styles.labelText, {color: Colors.Gray400}]}>{label}</Text>
    );
  };

  const TabBarHomeIcon = ({focused}: {focused: boolean}) => {
    return focused ? <GradientHomeIcon /> : <HomeIcon fill={Colors.Gray400} />;
  };
  const TabBarSettingIcon = ({focused}: {focused: boolean}) => {
    return focused ? (
      <GradientSettingIcon />
    ) : (
      <SettingIcon fill={Colors.Gray400} />
    );
  };

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerStyle: styles.header,
          tabBarStyle: styles.tabBar,
          headerTitleAlign: 'left',
          headerTitleStyle: styles.headerTitleContainer,
        }}>
        <Tab.Screen
          name="home"
          component={HomeScreen}
          options={{
            headerTitle: headerTitleGradient,
            tabBarIcon: ({focused}) => <TabBarHomeIcon focused={focused} />,
            tabBarLabel: ({focused}) => (
              <TabBarLabel focused={focused} label="홈" />
            ),
          }}
        />
        <Tab.Screen
          name="setting"
          component={SettingScreen}
          options={{
            headerTitle: '설정',
            tabBarIcon: ({focused}) => <TabBarSettingIcon focused={focused} />,
            tabBarLabel: ({focused}) => (
              <TabBarLabel focused={focused} label="설정" />
            ),
          }}
        />
      </Tab.Navigator>
      <TouchableOpacity style={styles.container} onPress={() => toggleModal()}>
        <AddIcon />
      </TouchableOpacity>
      <CustomModal />
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
  },
  container: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 50,
  },
  headerTitleContainer: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  labelText: {
    fontSize: 12,
  },
});
