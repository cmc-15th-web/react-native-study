import React, {useRef, useMemo, useCallback} from 'react';
import {TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import Home from './screens/Home';
import Add from './screens/Add';
import Settings from './screens/Settings';
import Splash from './screens/Splash.tsx';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import {BottomTabIcon} from './types/BottomTabType.ts';
import {colors, colors_type} from './styles/theme_color.ts';

import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import BottomSheetContent from './components/Add/BottomSheetContent.tsx';

type RootStackParamList = {
  Splash: undefined;
  MainTab: undefined;
  Add: undefined;
};

type MainTabParamList = {
  Home: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();
const Stack = createStackNavigator<RootStackParamList>();

const {width} = Dimensions.get('window');

const MainTab = () => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior="close"
        appearsOnIndex={0} // 이거 추가
        disappearsOnIndex={-1} // 이거 추가
      />
    ),
    [],
  );

  const focusedColor: colors_type = 'gradient100';
  const defaultColor: colors_type = 'gray400';
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarStyle: {...styles.tabContainer},
          tabBarIcon: ({focused, color, size}) => {
            let IconComponent: React.FC<BottomTabIcon> | null = null;
            switch (route.name) {
              case 'Home':
                IconComponent = HomeIcon;
                break;

              case 'Settings':
                IconComponent = SettingsIcon;
                break;
              default:
                IconComponent = null;
            }
            const iconColor = focused
              ? colors[focusedColor]
              : colors[defaultColor];
            return (
              IconComponent && (
                <IconComponent width={size} height={size} fill={iconColor} />
              )
            );
          },
          headerShown: false,
        })}>
        <Tab.Screen name="Home" component={Home} options={{title: '혿'}} />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{title: '설정'}}
        />
      </Tab.Navigator>
      <TouchableOpacity
        style={[styles.addBtn, {left: width / 2 - 25}]}
        onPress={() => handlePresentModalPress()}>
        <AddIcon width={60} height={60} fill={colors[focusedColor]} />
      </TouchableOpacity>
      {/*  */}
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        backdropComponent={renderBackdrop}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        style={{borderWidth: 1}}
        handleIndicatorStyle={styles.indicator}
        handleStyle={styles.modalTop}>
        <BottomSheetView style={styles.contentContainer}>
          <BottomSheetContent />
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
};

const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="Add" component={Add} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
    backgroundColor: colors['black'],
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 8,
    borderWidth: 0.1,
    borderTopColor: colors['gray400'],
  },
  addBtn: {
    position: 'absolute',
    bottom: 31,
  },
  // bottom sheet
  modalTop: {
    backgroundColor: colors['gray600'],
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  indicator: {
    backgroundColor: colors['gray400'],
  },
  contentContainer: {
    flex: 1,
    backgroundColor: colors['gray600'],
    paddingVertical: 40,
    paddingHorizontal: 24,
  },
});

export default Router;

import HomeIcon from './assets/Icons/HomeIcon.tsx';
import AddIcon from './assets/Icons/AddIcon.tsx';
import SettingsIcon from './assets/Icons/SettingsIcon.tsx';
