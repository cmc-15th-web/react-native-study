import React from 'react';
import BottomTabsNavigator from './src/components/BottomTabsNavigator.tsx';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Add from './src/screens/Add.tsx';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabsNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Add"
          component={Add}
          options={{headerShown: false, headerBackTitle: 'Back'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
