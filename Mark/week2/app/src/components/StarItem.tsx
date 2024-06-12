import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Palette} from '../constants/palette';
import {TrashCanSvg} from '../assets/TrashCanSvg';
import {useStore} from '../store/store';
import {useState} from 'react';

const StarItem = ({addr, isLastItem}: StarItemProps) => {
  const [isRemoved, setIsRemoved] = useState<boolean>(false);
  const webViewRef = useStore(state => state.webViewRef);

  const handleRemove = () => {
    setIsRemoved(true);
    if (webViewRef) {
      const message = {
        type: 'removeStar',
        payload: {
          removedAddr: addr,
        },
      };
      webViewRef.current?.postMessage(JSON.stringify(message));
    }
  };

  return (
    <View
      style={[
        styles.wrapper,
        isLastItem && styles.noBottomBorder,
        isRemoved && styles.removed,
      ]}>
      <Text style={styles.textAddr}>{addr}</Text>
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
