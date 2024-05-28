module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@icons': './src/assets/icons',
          '@': './src',
        },
      },
    ],
  ],
};
