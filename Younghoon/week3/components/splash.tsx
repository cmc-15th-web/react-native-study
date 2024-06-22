import React, { useEffect } from "react";
import { StatusBar, View, StyleSheet, Text } from "react-native";
import { SplashIcon } from "./ui/icons";
import MaskedView from "@react-native-masked-view/masked-view";
import { Gradient } from "./ui/gradient";
import { colorPalette } from "@/styles/colors";
import { GradientText } from "./ui/gradient-text";

export function Splash() {
  useEffect(() => {
    StatusBar.setHidden(true);

    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <SplashIcon fill={colorPalette.gradient100} />
      </View>
      <GradientText
        title="CMC"
        maskedView={{
          position: "absolute",
          bottom: 50,
          left: 0,
          right: 0,
          justifyContent: "center",
          alignItems: "center",
          height: 50,
        }}
        maskElement={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        textStyle={{
          fontSize: 20,
          fontWeight: "semibold",
          color: "black",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  iconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  maskedView: {
    position: "absolute",
    bottom: 50,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  maskElement: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "semibold",
    color: "black",
  },
  gradient: {
    flex: 1,
    width: "100%",
  },
});

export default Splash;
