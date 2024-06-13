import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useStore} from '../store/store';
import {Palette} from '../constants/palette';
import {StarBtnSvg} from '../assets/StarBtnSvg';
import StarItem from '../components/StarItem';

const Stars = () => {
  const starList = useStore(state => state.starList);

  const renderItem = ({item, index}: any) => {
    const isLastItem = index === starList.length - 1;
    return <StarItem item={item} isLastItem={isLastItem} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <StarBtnSvg width="30" height="30" fill={Palette.Blue600} />
        <Text style={styles.spanTop}>즐겨찾기</Text>
      </View>

      <FlatList
        style={styles.contentWrapper}
        data={starList}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        ListEmptyComponent={
          <Text style={styles.textListEmpty}>즐겨찾기가 없습니다</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palette.Blue100,
  },
  top: {
    alignItems: 'center',
    gap: 10,
    paddingTop: 54,
    paddingBottom: 29,
  },
  spanTop: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: Palette.White,
    borderRadius: 20,
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 14,
    color: Palette.Black,
    textAlignVertical: 'center',
  },
  contentWrapper: {
    backgroundColor: Palette.White,
    paddingHorizontal: 24,
    paddingVertical: 36,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  textListEmpty: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    color: Palette.Gray600,
  },
});

export default Stars;
