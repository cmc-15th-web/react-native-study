import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import theme from "../theme";

// Details 컴포넌트 정의
const Details: React.FC<DetailsProps> = ({ route }) => {
  const { image } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: image.uri }} style={styles.image} />
    </View>
  );
};

export default Details;

// 스타일 정의
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray900,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "70%",
    resizeMode: "cover",
  },
});
