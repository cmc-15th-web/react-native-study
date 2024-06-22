import React from "react";
import { Text, StyleSheet, TextStyle } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import theme from "./theme";

interface GradientTextProps {
  style?: TextStyle;
  children: React.ReactNode;
}

const GradientText: React.FC<GradientTextProps> = ({ style, children }) => {
  return (
    <MaskedView
      maskElement={<Text style={[style, { color: "black" }]}>{children}</Text>}
    >
      <LinearGradient
        colors={[theme.colors.pink, theme.colors.purple]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      >
        <Text style={[style, { opacity: 0 }]}>{children}</Text>
      </LinearGradient>
    </MaskedView>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
});

export default GradientText;
