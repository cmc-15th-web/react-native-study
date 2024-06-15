import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import useFavoritesStore from "../stores/favoritesStore"; // zustand 스토어를 가져옵니다.

const Favorite: React.FC = () => {
  const favorites = useFavoritesStore((state) => state.favorites);

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.favoriteItem}>
            <Text>{`Latitude: ${item.latitude}, Longitude: ${item.longitude}`}</Text>
          </View>
        )}
      />
    </View>
  );
};

// 스타일 설정을 정의
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  favoriteItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default Favorite;
