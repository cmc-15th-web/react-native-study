import React, {useEffect, useState} from 'react';
import {Alert, SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNav from '@src/components/BottomNav';
import ImageScreen from '@src/screens/ImageScreen';
import SplashScreen from 'react-native-splash-screen';
import PermissionScreen from '@src/screens/PermissionScreen';
import Colors from '@src/Colors';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useModalStore} from '@src/store/bottomRefStore';

const Stack = createNativeStackNavigator();

const App = () => {
  const {setBottomSheetModalRef} = useModalStore();

  // 첫 앱 진입
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  // ref설정
  useEffect(() => {
    const ref = React.createRef<BottomSheetModal>();
    setBottomSheetModalRef({...ref});
  }, [setBottomSheetModalRef]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Permission"
          screenOptions={{
            headerStyle: {backgroundColor: Colors.Gray900},
            headerTitleStyle: {color: Colors.Pink},
          }}>
          <Stack.Screen
            name="Home"
            component={BottomNav}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Permission" component={PermissionScreen} />
          <Stack.Screen
            name="Detail"
            component={ImageScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});

export default App;
