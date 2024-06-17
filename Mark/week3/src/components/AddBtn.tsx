import { Pressable, StyleSheet } from "react-native";
import { AddBtnSvg } from "../assets/AddBtnSvg";
import { Palette } from "../constants/palette";

const AddBtn = () => {
  return (
    <Pressable style={styles.container}>
      <AddBtnSvg width="46" height="46" fill={Palette.GradientPurplePink}/>
    </Pressable>
  );
}

const styles= StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 23,
    alignSelf: 'center'
  }
})

export default AddBtn;