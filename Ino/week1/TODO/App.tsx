import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './app/screen/list';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="main"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Detail"
          component={MainScreen}
          options={{title: '상세보기'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
