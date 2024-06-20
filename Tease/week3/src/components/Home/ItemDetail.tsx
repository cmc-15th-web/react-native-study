import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import {PhotoType} from '../../stores/usePhoto';
import {colors} from '../../styles/theme_color';
import ArrowBackIcon from '../../assets/Icons/ArrowBack';
import {convertDate} from '../../utils/convertDate';

const {width, height} = Dimensions.get('window');

const ItemDetail = ({navigation, route}: any) => {
  const item: PhotoType = route.params.params.item;
  const date = convertDate(item.date);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowBackIcon width={24} height={24} fill={colors['gradient100']} />
        </TouchableOpacity>
        <Text style={styles.text}>{date}</Text>
        <View style={{width: 24, height: 24}} />
      </View>
      <Image source={{uri: item.image}} style={styles.image} />
    </SafeAreaView>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors['black'],
  },
  header: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 50,
  },
  text: {
    color: colors['gradient100'],
    fontSize: 16,
  },
  image: {
    width: width,
    height: height * 0.65,
  },
});
