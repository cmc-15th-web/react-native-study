import { StyleSheet, Text, View } from "react-native";
import { Palette } from "../constants/palette";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: Palette.White}}>홈</Text>
    </View>
  );
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palette.Black
  }
})

export default Home;