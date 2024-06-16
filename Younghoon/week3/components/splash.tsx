import React, { useEffect } from "react";
import { StatusBar, View, StyleSheet, Text } from "react-native";
import { SplashIcon } from "./ui/icons";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

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
        <SplashIcon />
      </View>
      <MaskedView
        style={styles.maskedView}
        maskElement={
          <View style={styles.maskElement}>
            <Text style={styles.text}>CMC</Text>
          </View>
        }
      >
        <LinearGradient
          colors={["#E33AFF", "#A45CFF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        />
      </MaskedView>
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
