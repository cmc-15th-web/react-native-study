import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Palette} from '../constants/palette';
import {TrashCanSvg} from '../assets/TrashCanSvg';
import {useStore} from '../store/store';

const StarItem = ({item, isLastItem}: StarItemProps) => {
  // const [isRemoved, setIsRemoved] = useState<boolean>(false);
  const webViewRef = useStore(state => state.webViewRef);
  const {starList, setStarList} = useStore();

  const handleRemove = () => {
    const newList = starList.filter(star => star.markerId !== item.markerId);
    setStarList(newList);

    if (webViewRef) {
      const message = {
        type: 'removeStar',
        payload: {
          removedItem: item,
        },
      };
      webViewRef.current?.postMessage(JSON.stringify(message));
    }
  };

  return (
    <View style={[styles.wrapper, isLastItem && styles.noBottomBorder]}>
      <Text style={styles.textAddr}>{item.addr}</Text>
      <TouchableOpacity onPress={handleRemove}>
        <TrashCanSvg width="22" height="22" fill={Palette.Gray200} />
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
  removed: {
    display: 'none',
  },
  noBottomBorder: {
    borderBottomWidth: 0,
  },
  textAddr: {
    fontSize: 14,
    color: Palette.Black,
  },
});
