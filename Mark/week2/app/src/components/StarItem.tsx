import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Palette} from '../constants/palette';
import reactotron from 'reactotron-react-native';
import { TrashCanSvg } from '../assets/TrashCanSvg';

const StarItem = ({addr, isLastItem}: StarItemProps) => {
  reactotron.log(addr);
  return (
    <View style={[styles.wrapper, isLastItem && styles.noBottomBorder]}>
      <Text style={styles.textAddr}>{addr}</Text>
      <TouchableOpacity>
        <TrashCanSvg width='22' height='22' fill={Palette.Gray200}/>
      </TouchableOpacity>
    </View>
  );
};

export default StarItem;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: Palette.Blue200,
  },
  noBottomBorder: {
    borderBottomWidth: 0,
  },
  textAddr: {
    fontSize: 14,
    color: Palette.Black,
  },
});
