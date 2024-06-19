import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import THEME_COLOR from './styles/theme-color';

interface Props {
  style?: StyleProp<TextStyle>;
  text: string;
}

const GradientText = ({style, text}: Props) => {
  return (
    <MaskedView maskElement={<Text style={style}>{text}</Text>}>
      <LinearGradient
        colors={[THEME_COLOR.Pink, THEME_COLOR.Purple]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Text style={[style, {opacity: 0}]}>{text}</Text>
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
