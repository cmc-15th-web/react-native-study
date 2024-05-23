import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackList = {
  BottomTabs: undefined;
  Add: undefined;
};

export type BottomTabsProps = NativeStackScreenProps<
  RootStackList,
  'BottomTabs'
>;
