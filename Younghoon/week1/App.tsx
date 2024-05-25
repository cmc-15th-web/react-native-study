import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from './src/navigators/tab-navigation';
import {TaskScreen} from './src/screens';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Tab"
          component={TabNavigation}
          options={{animation: 'slide_from_bottom'}}
        />
        <Stack.Screen
          name="Task"
          component={TaskScreen}
          options={{animation: 'slide_from_right'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
