/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import AddTask from '@/screens/AddTask';
import HeaderRightButton from '@/components/HeaderRightButton';
import HeaderLeftButton from '@/components/HeaderLeftButton';
import GlobalNavBar from '@/components/GlobalNavBar';
import {useThemeStore} from '@/store/Theme';
import Colors from '@/constants/Colors';
import {StyleSheet} from 'react-native';

enableScreens();
const Stack = createStackNavigator();

const App = () => {
  const {color: themeColor, loadColor} = useThemeStore();
  useEffect(() => {
    loadColor();
  }, [loadColor]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          children={() => <GlobalNavBar themeColor={themeColor} />}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddTask"
          component={AddTask}
          options={{
            headerTitle: '할일을 추가해주세요!',
            headerTintColor: themeColor,
            headerStyle: styles.header,
            headerRight: () => <HeaderRightButton themeColor={themeColor} />,
            headerLeft: () => <HeaderLeftButton />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.Gray,
    borderBottomColor: 'transparent',
    elevation: 0,
    shadowOpacity: 0,
  },
});
