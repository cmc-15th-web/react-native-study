import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import THEME_COLOR from '../styles/theme-color';
import LeftArrow from '../assets/left-arrow-icon.svg';
import GradientComponent from '../components/GradientComponent';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const ImageDetail = ({route}: {route: any}) => {
  const {imgUrls, date} = route.params;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableHighlight onPress={() => navigation.goBack()}>
          <LeftArrow />
        </TouchableHighlight>
        <GradientComponent
          component={<Text style={styles.text}>{date}</Text>}
        />
        <Text />
      </View>
      <View style={styles.imgContainer}>
        <Image
          style={styles.image}
          source={{uri: imgUrls}}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME_COLOR.Gray[900],
  },
  header: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 75,
  },
  imgContainer: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: 'medium',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ImageDetail;
