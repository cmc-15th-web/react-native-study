import {StyleSheet} from 'react-native';

interface Colors {
  [key: string]: {
    color: string;
  };
}

export const colors: Colors = StyleSheet.create({
  orange: {
    color: '#FF8F50',
  },
  green: {
    color: '#57BB73',
  },
  blue: {
    color: '#5061FF',
  },
  purple: {
    color: '#C750FF',
  },
  pink: {
    color: '#FF7474',
  },
  gray: {
    color: '#F5F5F5',
  },
  darkGray: {
    color: '#888888',
  },
  black: {
    color: '#000000',
  },
  white: {
    color: '#FFFFFF',
  },
});
