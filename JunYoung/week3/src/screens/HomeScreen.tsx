import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>as</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",

    alignItems: "center",
  },
  Text: {
    color: "white",
    fontSize: 16,
  },
});
