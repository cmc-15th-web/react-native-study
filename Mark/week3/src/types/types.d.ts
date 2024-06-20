import { TextStyle } from "react-native";

type SvgProps = {
  width: string;
  height: string;
  fill?: string;
};

type UploadedImage = {
  path: string;
  modificationDate: string;
}

type GradientTextProp = {
  children: React.ReactNode;
  style?: TextStyle | TextStyle[];
  colors: string[];
}