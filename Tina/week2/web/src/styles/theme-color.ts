const THEME_COLOR = {
  Blue: {
    100: '#E9EEFF',
    200: '#BFC9FF',
    600: '#5061FF',
  },
  Gray: {
    100: '#E4E4E4',
    200: '#C3C3C3',
    600: '#888888',
  },
  White: '#FFFFFF',
  Black: '#000000',
};

export type ThemeColor = keyof typeof THEME_COLOR;

export default THEME_COLOR;
