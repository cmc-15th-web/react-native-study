import React from 'react';
import BottomTabsNavigator from './src/components/BottomTabsNavigator.tsx';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Add from './src/screens/Add.tsx';
import {RootStackList} from './src/types/navigator.ts';
import BackButton from './src/components/add/BackButton.tsx';
import CompleteButton from './src/components/add/CompleteButton.tsx';
import THEME_COLOR from './src/styles/theme-color.ts';
import {useThemeColor} from './src/store/color.ts';

const Stack = createNativeStackNavigator<RootStackList>();

function App(): React.JSX.Element {
  const {theme} = useThemeColor();
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
          options={{
            headerShown: true,
            headerTitle: '할일을 추가해주세요!',
            headerTitleAlign: 'center',
            headerLeft: BackButton,
            headerRight: CompleteButton,
            headerTitleStyle: {
              fontSize: 18,
              color: `${theme}`,
              fontWeight: 'normal',
            },
            headerStyle: {
              backgroundColor: `${THEME_COLOR.gray}`,
            },
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
