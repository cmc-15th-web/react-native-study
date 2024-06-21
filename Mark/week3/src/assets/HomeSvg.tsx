import {Svg, Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import {Palette} from '../constants/palette';

export const HomeSvg = ({width, height, fill}: SvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 18 19" fill="none">
      <Defs>
        <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <Stop offset="0%" stopColor={Palette.Pink} stopOpacity="1" />
          <Stop offset="100%" stopColor={Palette.Purple} stopOpacity="1" />
        </LinearGradient>
      </Defs>
      <Path
        d="M0.833252 17.1667V7.02599C0.833252 6.72732 0.900141 6.4446 1.03392 6.17782C1.16692 5.91105 1.35125 5.69093 1.58692 5.51749L7.86942 0.760989C8.19764 0.509767 8.57331 0.384155 8.99642 0.384155C9.41875 0.384155 9.79675 0.509767 10.1304 0.760989L16.4129 5.51749C16.6486 5.69093 16.8329 5.91105 16.9659 6.17782C17.0997 6.4446 17.1666 6.72732 17.1666 7.02599V17.1667C17.1666 17.4793 17.0503 17.7519 16.8178 17.9845C16.5844 18.217 16.3118 18.3333 15.9999 18.3333H12.0508C11.784 18.3333 11.5604 18.2431 11.3799 18.0627C11.1995 17.8822 11.1093 17.6582 11.1093 17.3907V11.8268C11.1093 11.56 11.0186 11.3364 10.8374 11.156C10.657 10.9748 10.4334 10.8842 10.1666 10.8842H7.83325C7.56647 10.8842 7.34286 10.9748 7.16242 11.156C6.9812 11.3364 6.89059 11.56 6.89059 11.8268V17.3918C6.89059 17.6586 6.80036 17.8822 6.61992 18.0627C6.43947 18.2431 6.21586 18.3333 5.94909 18.3333H1.99992C1.68725 18.3333 1.41464 18.217 1.18209 17.9845C0.949529 17.7512 0.833252 17.4785 0.833252 17.1667Z"
        fill={fill === Palette.GradientPurplePink ? 'url(#grad)' : fill}
      />
    </Svg>
  );
};