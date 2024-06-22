import { Text } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import LinearGradient from "react-native-linear-gradient";
import { Palette } from "../constants/palette";

const GradientText = (props: GradientTextProp) => {
  return (
    <MaskedView maskElement={<Text style={[props.style, {color: Palette.Black}]}>{props.children}</Text>}>
      <LinearGradient
        colors={props.colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        locations={[0, 0.5]}
      >
        <Text style={[props.style, {opacity: 0}]}>{props.children}</Text>
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;