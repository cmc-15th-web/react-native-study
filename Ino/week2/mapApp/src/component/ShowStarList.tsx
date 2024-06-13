import React, {useRef, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import WebView, {WebViewMessageEvent} from 'react-native-webview';
import Colors from '../Colors';
import {useStarsState} from '../store/star';
import StarIcon from '../assets/Star';
import {showStarList} from '../utils/webViewBridge';

interface ShowStarBtnProps {
  webRef: React.RefObject<WebView>;
}

const ShowStarBtn: React.FC<ShowStarBtnProps> = ({webRef}) => {
  const {stars} = useStarsState();
  const [visible, setVisible] = useState(false);

  const handleStarVisible = () => {
    //Webview로 전송
    showStarList(!visible, stars, webRef);
    setVisible(!visible);
  };

  return (
    <>
      <Pressable
        style={visible ? styles.starsActive : styles.stars}
        onPress={handleStarVisible}>
        <View
          style={visible ? styles.starContainerActive : styles.starContainer}>
          <StarIcon size={14} color={visible ? Colors.Blue600 : Colors.White} />
        </View>
        <Text style={{color: visible ? Colors.White : Colors.Black}}>
          즐겨찾기
        </Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  stars: {
    zIndex: 2,
    position: 'absolute',
    left: 19,
    top: 10,
    flexDirection: 'row',
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderWidth: 1,
    borderRadius: 20,
    alignContent: 'center',
    backgroundColor: Colors.White,
    borderColor: Colors.Black,
  },
  starsActive: {
    zIndex: 2,
    position: 'absolute',
    left: 19,
    top: 10,
    flexDirection: 'row',
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderWidth: 1,
    borderRadius: 20,
    alignContent: 'center',
    backgroundColor: Colors.Blue600,
    borderColor: Colors.Black,
  },
  starContainer: {
    borderRadius: 10,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 2,
    marginRight: 4,
    backgroundColor: Colors.Blue600,
  },
  starContainerActive: {
    borderRadius: 10,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 2,
    marginRight: 4,
    backgroundColor: Colors.White,
  },
});

export default ShowStarBtn;
