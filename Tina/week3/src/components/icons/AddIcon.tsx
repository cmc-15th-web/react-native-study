import React from 'react';
import {Path, Svg} from 'react-native-svg';
import THEME_COLOR from '../../styles/theme-color';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

const AddSvg = ({color}: {color?: string}) => {
  return (
    <Svg width="46" height="46" viewBox="0 0 46 46" fill="none">
      <Path
        d="M21.75 34.25H24.25V24.25H34.25V21.75H24.25V11.75H21.75V21.75H11.75V24.25H21.75V34.25ZM23.0075 45.5C19.8975 45.5 16.9725 44.91 14.2325 43.73C11.4942 42.5483 9.11167 40.945 7.085 38.92C5.05833 36.8967 3.45417 34.5167 2.2725 31.78C1.09083 29.0433 0.5 26.1192 0.5 23.0075C0.5 19.8975 1.09 16.9725 2.27 14.2325C3.45167 11.4942 5.055 9.11167 7.08 7.085C9.10333 5.05833 11.4833 3.45417 14.22 2.2725C16.9567 1.09083 19.8808 0.5 22.9925 0.5C26.1025 0.5 29.0275 1.09 31.7675 2.27C34.5058 3.45167 36.8883 5.055 38.915 7.08C40.9417 9.10333 42.5458 11.4833 43.7275 14.22C44.9092 16.9567 45.5 19.8808 45.5 22.9925C45.5 26.1025 44.91 29.0275 43.73 31.7675C42.5483 34.5058 40.945 36.8883 38.92 38.915C36.8967 40.9417 34.5167 42.5458 31.78 43.7275C29.0433 44.9092 26.1192 45.5 23.0075 45.5Z"
        fill={color}
      />
    </Svg>
  );
};

export const AddIcon = () => {
  return (
    <MaskedView maskElement={<AddSvg color={THEME_COLOR.Purple} />}>
      <LinearGradient colors={[THEME_COLOR.Pink, THEME_COLOR.Purple]}>
        <AddSvg />
      </LinearGradient>
    </MaskedView>
  );
};

export default AddIcon;
