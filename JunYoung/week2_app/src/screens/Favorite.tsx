import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { TrashBtn } from "../assets/icons";
import useFavoritesStore from "../stores/favoritesStore"; // zustand 스토어를 가져옵니다.
import theme from "../theme";

const Favorite: React.FC = () => {
  const favorites = useFavoritesStore((state) => state.favorites);
  const removeFavorite = useFavoritesStore((state) => state.removeFavorite);

  const handleRemove = (index: number) => {
    removeFavorite(index);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.favoriteItem}>
            <Text>{`Latitude: ${item.latitude}, Longitude: ${item.longitude}`}</Text>
            <TouchableOpacity
              onPress={() => handleRemove(index)}
              style={styles.trashButton}
            >
              <TrashBtn width={28} height={28} fill={theme.colors.blue600} />
            </TouchableOpacity>
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  trashButton: {
    padding: 10,
  },
});

export default Favorite;
