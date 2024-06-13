type SvgProps = {
  width: string;
  height: string;
  fill: string;
}

type StarItemProps = {
  item: Star;
  isLastItem: boolean;
}

type Star = {
  addr: string;
  markerId: number;
}