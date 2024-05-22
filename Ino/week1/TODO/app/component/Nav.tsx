import React from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import {ListScreen, AddScreen} from '../screen/ToDoList';
import {Setting} from '../screen/Setting';

import HomeSvg from '../assets/img/Home.svg';
import THemeSvg from '../assets/img/Theme.svg';
import AddButton from './AddButton';
import {Button, StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();
type TabParamList = {
  Today: undefined;
  AddButton: undefined;
  Setting: undefined;
};

const StackNav: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TabNav}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Add"
        component={AddScreen}
        options={{
          title: '할일을 추가해주세요!',
          headerRight: () => (
            <Button
              onPress={() => {
                console.log('완료 버튼이 눌렸습니다!');
              }}
              title="완료"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const TabNav: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={ListScreen}
        options={{
          title: 'Today',
          tabBarLabel: '홈',
          tabBarIcon: ({color, size}) => <HomeSvg />,
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
          tabBarIcon: ({color, size}) => <THemeSvg />,
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
