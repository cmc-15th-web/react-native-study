// src/screens/Splash.tsx
import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Svg, { Path } from "react-native-svg";
import theme from "../theme";

const Splash = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.iconContainer}>
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="#A45CFF">
          <Path
            d="M17.9041 21.0274C19.9161 20.1208 21.5609 18.7251 22.6264 17.0205C23.6919 15.3159 24.1292 13.3804 23.882 11.4636C22.2539 12.5989 20.7247 13.8321 19.3064 15.1535C16.8636 17.4235 14.8749 19.8105 13.3994 22.1364C14.9758 22.0357 16.51 21.658 17.9041 21.0274ZM2.06777 18.4645C0.483427 20.2844 -0.742665 22.9644 0.527174 23.7714C2.31843 24.9114 10.4636 21.7584 16.9712 14.9665C23.4789 8.17459 25.6319 1.16967 22.7399 0.093684C21.405 -0.40331 18.6182 1.17667 17.0173 2.48766L17.709 2.80165C19.2839 1.94966 21.9087 1.06867 19.4813 4.77763L19.4459 4.83063C17.7086 3.71439 15.6293 3.04282 13.4546 2.89554C11.2798 2.74826 9.10066 3.13143 7.1755 3.99964C1.61493 6.50561 -0.490825 12.3495 2.47213 17.0515C3.14688 18.1248 4.05598 19.0803 5.15133 19.8675C0.943359 22.6174 1.97082 20.2274 2.55844 19.0515L2.06777 18.4645Z"
            fill="#A45CFF"
          />
        </Svg>
      </View>
      <Text style={styles.text}>CMC</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray900,
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    marginBottom: 20,
    width: 24,
    height: 24,
  },
  text: {
    color: "#A45CFF",
    fontSize: 24,
  },
});

export default Splash;
