import { colorPalette } from "@/styles/colors";
import { LinearGradient } from "expo-linear-gradient";
import { StyleProp, ViewStyle } from "react-native";

type GradientProps = {
  colors?: string[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  style: StyleProp<ViewStyle>;
};

export function Gradient({
  colors = [colorPalette.pink, colorPalette.purple],
  start = { x: 0, y: 0 },
  end = { x: 1, y: 1 },
  style,
}: GradientProps) {
  return (
    <LinearGradient colors={colors} start={start} end={end} style={style} />
  );
}
