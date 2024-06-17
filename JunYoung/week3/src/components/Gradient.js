import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const Gradient = ({ children, style }) => {
  return (
    <LinearGradient
      colors={["#A45CFF", "#E33AFF"]}
      start={[0, 0]}
      end={[1, 1]}
      style={style}
    >
      {children}
    </LinearGradient>
  );
};

export default Gradient;
