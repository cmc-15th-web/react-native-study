import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from './Props';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const goToDetailScreen = () => {
    navigation.navigate('Detail');
  };

  return (
    <View>
      <Text>Home 화면</Text>
      <Pressable onPress={goToDetailScreen}>
        <Text>버튼</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
