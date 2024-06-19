import Svg, { Path } from "react-native-svg";

export const StarSvg = ({width, height, fill}: SvgProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M7.32489 18.923L8.56489 13.61L4.44189 10.038L9.87289 9.56801L11.9999 4.55701L14.1269 9.56701L19.5569 10.037L15.4349 13.609L16.6749 18.922L11.9999 16.102L7.32489 18.923Z"
        fill={fill}
      />
    </Svg>
  );
};
