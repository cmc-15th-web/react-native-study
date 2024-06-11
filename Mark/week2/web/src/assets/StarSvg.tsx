export const StarSvg = ({ width, height, fill }: SvgProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="30" height="30" rx="15" fill={fill} />
      <path
        d="M9.15612 23.6538L10.7061 17.0125L5.55237 12.5475L12.3411 11.96L14.9999 5.69625L17.6586 11.9588L24.4461 12.5463L19.2936 17.0113L20.8436 23.6525L14.9999 20.1275L9.15612 23.6538Z"
        fill="white"
      />
    </svg>
  );
};
