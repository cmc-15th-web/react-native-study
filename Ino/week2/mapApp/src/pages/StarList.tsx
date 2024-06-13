import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {useStarsState} from '../store/star';
import TrashIcon from '../assets/Trash';
import StarIcon from '../assets/Star';
import Colors from '../Colors';

const ItemListScreen: React.FC = () => {
  const {stars, removeItem} = useStarsState();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.star}>
          <StarIcon size={20} color={Colors.White} />
        </View>
        <View style={styles.startxt}>
          <Text style={{color: Colors.Black}}>즐겨찾기</Text>
        </View>
      </View>
      <View style={styles.list}>
        {stars.length == 0 ? (
          <Text style={{textAlign: 'center'}}>즐겨찾기를 추가해 주세요.</Text>
        ) : (
          <></>
        )}
        {stars.map((item, index) => (
          <>
            <View key={index} style={styles.item}>
              <Text style={{color: Colors.Black}}>{item.address}</Text>
              <Pressable
                style={styles.trashbtn}
                onPress={() => removeItem(index)}>
                <TrashIcon size={16} color={Colors.White} />
              </Pressable>
            </View>
            <View style={{borderWidth: 1, borderColor: Colors.Blue200}}></View>
          </>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Blue100,
  },
  header: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  star: {
    backgroundColor: Colors.Blue600,
    borderRadius: 100,
    padding: 5,
  },
  startxt: {
    top: 10,
    backgroundColor: Colors.White,
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 20,
    borderColor: Colors.Black,
    borderWidth: 1,
  },
  list: {
    flexGrow: 3,
    backgroundColor: Colors.White,
    paddingVertical: 36,
    paddingHorizontal: 24,
  },
  item: {
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  trashbtn: {
    backgroundColor: Colors.Gray200,
    borderRadius: 100,
    padding: 8,
  },
});

export default ItemListScreen;
