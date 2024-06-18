import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Colors from '@/constants/Colors';
import GradientText from './GradientText';
import ArrowBackIcon from '@/assets/icons/ArrowBack.svg';
import {useNavigation} from '@react-navigation/native';

const DetailPhotoHeader = ({header}: {header: string}) => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={handleBack}>
        <ArrowBackIcon />
      </TouchableOpacity>
      <View style={styles.headerContainer}>
        <GradientText style={styles.headerTitle}>{header}</GradientText>
      </View>
      <View style={styles.placeholder} />
    </View>
  );
};

export default DetailPhotoHeader;

const styles = StyleSheet.create({
  container: {
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.Gray900,
    paddingHorizontal: 16,
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    textAlign: 'center',
  },
  placeholder: {
    flex: 1,
  },
});
