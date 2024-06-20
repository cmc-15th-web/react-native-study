import {Pressable, StyleSheet, Text, View, FlatList, Image} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import CustomBottomSheet from '@src/components/BottomSheet';
import Colors from '@src/Colors';
import ImageListScreen from '@src/components/ImageList';

const HomeScreen = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <BottomSheetModalProvider>
        <View style={{backgroundColor: Colors.Gray900, height: '100%'}}>
          <ImageListScreen />
          <CustomBottomSheet />
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default HomeScreen;
