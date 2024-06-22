const THEME_COLOR = {
  Purple: '#A45Cff',
  Pink: '#E33AFF',
  Gray: {
    400: '#888888',
    600: '#282828',
    900: '#121212',
  },
  White: '#FFFFFF',
  Black: '#000000',
};

export type ThemeColor = keyof typeof THEME_COLOR;

export default THEME_COLOR;
