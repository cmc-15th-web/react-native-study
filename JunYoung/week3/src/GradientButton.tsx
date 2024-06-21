// src/components/GradientButton.tsx
import * as React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface GradientButtonProps extends TouchableOpacityProps {
  style?: ViewStyle;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  style,
  ...props
}) => {
  return (
    <TouchableOpacity {...props} style={[styles.touchable, style]}>
      <LinearGradient colors={["#FF0080", "#7928CA"]} style={styles.gradient}>
        {children}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    borderRadius: 30,
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    width: "100%",
    height: "100%",
  },
});

export default GradientButton;
