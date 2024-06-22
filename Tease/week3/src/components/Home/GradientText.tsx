import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Text as SvgText,
} from 'react-native-svg';

const GradientText = ({text, style}: any) => (
  <Svg height="100" width="300">
    <Defs>
      <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
        <Stop offset="0%" stopColor="rgba(227,58,255,1)" />
        <Stop offset="100%" stopColor="rgba(164,92,255,1)" />
      </LinearGradient>
    </Defs>
    <SvgText
      fill="url(#grad)"
      fontSize="30"
      fontWeight="bold"
      x="0"
      y="30"
      {...style}>
      {text}
    </SvgText>
  </Svg>
);

export default GradientText;
