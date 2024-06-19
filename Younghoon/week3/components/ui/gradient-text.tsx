import React from "react";
import MaskedView from "@react-native-masked-view/masked-view";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export function GradientText({
  title,
  textStyle,
  maskedView,
  maskElement,
}: {
  title: string;
  textStyle: any;
  maskedView?: any;
  maskElement?: any;
}) {
  return (
    <MaskedView
      style={[{ width: "100%" }, maskedView]}
      maskElement={
        <View
          style={[
            { flex: 1, justifyContent: "center", alignItems: "center" },
            maskElement,
          ]}
        >
          <Text style={[styles.text, textStyle]}>{title}</Text>
        </View>
      }
    >
      <LinearGradient
        colors={["#E73AFF", "#A45CFF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      />
    </MaskedView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    color: "black",
  },
  gradient: {
    flex: 1,
  },
});
