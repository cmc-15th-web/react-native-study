import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type TabNavigatorParamList = {
  Home: undefined;
  Add: undefined;
  Settings: undefined;
};

type RootStackParamList = {
  Tab: undefined;
  Task: undefined;
};

type AddScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabNavigatorParamList, 'Add'>,
  NativeStackNavigationProp<RootStackParamList>
>;
type HomeScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabNavigatorParamList, 'Home'>,
  NativeStackNavigationProp<RootStackParamList>
>;

type TabNavProps = {
  navigation: AddScreenNavigationProp;
};
type TaskProps = {
  navigation: HomeScreenNavigationProp;
};
