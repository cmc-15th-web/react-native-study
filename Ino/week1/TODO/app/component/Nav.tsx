import React from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import {ListScreen} from '../screen/ToDoList';
import {AddScreen} from '../screen/AddScreen';
import {Setting} from '../screen/SettingScreen';

import HomeSvg from '../assets/img/Home.svg';
import THemeSvg from '../assets/img/Theme.svg';
import AddButton from './AddButton';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useToDoStore} from '../stores/ToDoStore';
import {useThemeStore} from '../stores/ThemeStore';

const Tab = createBottomTabNavigator();
type TabParamList = {
  Today: undefined;
  AddButton: undefined;
  Setting: undefined;
};

const StackNav: React.FC = ({}) => {
  const {setSave} = useToDoStore(); // Zustand를 사용하여 ToDo를 추가하는 함수 가져오기

  // 새로운 ToDo를 추가하는 함수
  const handleAddToDo = () => {
    setSave(true);
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={TabNav}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Add"
        component={AddScreen}
        options={({navigation}) => ({
          title: '할일을 추가해주세요!',
          headerRight: () => (
            <TouchableOpacity onPress={() => handleAddToDo()}>
              <Text>완료</Text>
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const TabNav: React.FC = () => {
  const {themeColor} = useThemeStore();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={ListScreen}
        options={{
          title: 'Today',
          tabBarLabel: '홈',
          tabBarIcon: ({focused}) => (
            <HomeSvg style={{color: focused ? themeColor : '#888888'}} />
          ),
        }}
      />
      <Tab.Screen
        name="AddButton"
        component={EmptyScreen}
        options={({
          navigation,
        }: {
          navigation: NavigationProp<ParamListBase>;
        }) => ({
          tabBarItemStyle: {height: 0},
          tabBarButton: () => {
            const castedNavigation = navigation as NativeStackNavigationProp<
              TabParamList,
              'AddButton'
            >;
            return <AddButton navigation={castedNavigation} />;
          },
        })}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          title: '설정',
          tabBarLabel: '설정',
          tabBarIcon: ({focused}) => (
            <THemeSvg style={{color: focused ? themeColor : '#888888'}} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const EmptyScreen = () => {
  return <></>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ECF0F1',
  },
  buttonsContainer: {
    padding: 10,
  },
  addButton: {
    width: 80,
    height: 80,
    justifyContent: 'center',
  },
  addIcon: {
    width: 50,
    height: 50,
  },
  textStyle: {
    textAlign: 'center',
    marginBottom: 8,
  },
});

export default StackNav;
