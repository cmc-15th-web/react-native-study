import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNavigation from './src/components/BottomNavigation';
import AddToDo from './src/screens/AddToDo';
import { useStore } from './src/store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const {setColor, setToDos} = useStore();

  useEffect(() => {
    const getColorFromStorage = async () => {
      try {
        const storedColor = await AsyncStorage.getItem('color');
        if (storedColor) {
          setColor(storedColor);
        }
      } catch (error) {
        console.error('Error getting color from storage:', error);
      }
    };

    const getTodosFromStorage = async () => {
      try {
        const storedTodos = await AsyncStorage.getItem('todos');
        if (storedTodos) {
          setToDos(JSON.parse(storedTodos));
        }
      } catch (error) {
        console.error('Error getting todos from storage:', error);
      }
    };

    getColorFromStorage();
    getTodosFromStorage();
  }, [])

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
