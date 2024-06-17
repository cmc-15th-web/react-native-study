import { StyleSheet, Text, View } from "react-native";
import { Palette } from "../constants/palette";

const Setting = () => {
  return (
    <View style={styles.container}>
      <Text>세팅</Text>
    </View>
  );
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palette.Black
  }
})

export default Setting;