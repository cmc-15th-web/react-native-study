import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNavigation from './src/components/BottomNavigation';
import AddToDo from './src/screens/AddToDo';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={BottomNavigation} />
        <Stack.Screen name='AddToDo' component={AddToDo}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
