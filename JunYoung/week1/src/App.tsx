import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// 스크린 import
import BottomTabNavi from './components/BottomTabNavi';
import Add from './screens/Add';

// 버튼 import
import {headerLeftBtn} from './components/Add/headerLeftBtn';
import {headerRightBtn} from './components/Add/headerRightBtn';
import {ThemeProvider} from './context/ThemeContext';
import {useTheme} from './hooks/useTheme';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="Tab"
            component={BottomTabNavi}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Add"
            component={Add}
            options={({navigation}) => {
              const {themeColor} = useTheme();
              return {
                headerShown: true,
                headerTitle: '할일을 추가해주세요!',
                headerTitleStyle: {color: themeColor, fontSize: 18}, // 헤더 텍스트 색상 및 크기 설정
                headerBackTitleVisible: false,
                headerShadowVisible: false,
                headerLeft: () => headerLeftBtn({navigation}),
                headerRight: () => headerRightBtn({navigation}),
                headerStyle: styles.header,
              };
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F5F5F5',
  },
});

export default App;
