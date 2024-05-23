declare module '*.svg' {
  import {SvgProps} from 'react-native-svg';
  const content: React.FunctionComponent<SvgProps>;
  export default content;
}
