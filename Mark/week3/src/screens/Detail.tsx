import {Image, Pressable, StyleSheet, View} from 'react-native';
import {Palette} from '../constants/palette';
import {NavigationProp, RouteProp, useNavigation} from '@react-navigation/native';
import {ArrowBackSvg} from '../assets/ArrowBackSvg';
import {format} from 'date-fns';
import GradientText from '../components/GradientText';

const Detail = ({route}: {route: RouteProp<RootStackParamList, 'Detail'>}) => {
  const imagePath = route.params.imagePath;
  const modificationDate = route.params.modificationDate;
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  
  const formattedDate = format(+modificationDate, 'yyyy.MM.dd HH:mm');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.arrowBack} onPress={() => navigation.goBack()}>
          <ArrowBackSvg
            width="24"
            height="24"
            fill={Palette.GradientPurplePink}
          />
        </Pressable>
        <GradientText
          style={styles.date}
          colors={[Palette.Pink, Palette.Purple]}>
          {formattedDate}
        </GradientText>
      </View>
      <View style={styles.imageWrapper}>
        <Image source={{uri: imagePath}} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palette.Black,
  },
  header: {
    flexDirection: 'row',
    paddingVertical: 12,
    justifyContent: 'center',
  },
  arrowBack: {
    position: 'absolute',
    left: 20,
    top: 12,
  },
  date: {
    fontSize: 18,
    fontWeight: '500',
  },
  imageWrapper: {
    flex: 1
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default Detail;
