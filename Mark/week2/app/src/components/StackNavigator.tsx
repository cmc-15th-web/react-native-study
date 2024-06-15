import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import BottomNavigator from "./BottomNavigator";
import Stars from "../screens/Stars";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomNavigator" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BottomNavigator" component={BottomNavigator}/>
        <Stack.Screen name="Stars" component={Stars}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator;