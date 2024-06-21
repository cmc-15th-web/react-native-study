import React from "react";
import {
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import GradientText from "../GradientText";
import theme from "../theme"; // 테마 설정
import { HomeScreenProps, ImagePickerResult } from "../types"; // 타입 정의

// HomeScreen 컴포넌트 정의
const HomeScreen: React.FC<HomeScreenProps> = ({ images, navigation }) => {
  const numColumns = 3; // 그리드 뷰의 열 개수
  const imageSize = Dimensions.get("window").width / numColumns - 10; // 이미지 크기 계산

  // 각 이미지 아이템을 렌더링하는 함수
  const renderItem = ({ item }: { item: ImagePickerResult }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Details", { image: item })}
    >
      <Image
        source={{ uri: item.uri }} // 이미지 URI
        style={{ width: imageSize, height: imageSize, margin: 5 }} // 이미지 스타일
        resizeMode="cover" // 이미지 크기 조절 방식
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* 그라디언트 텍스트 컴포넌트 */}
      <Text style={styles.title}>준영님의 사진첩</Text>
      {images.length > 0 ? (
        // 이미지가 있는 경우 그리드 뷰로 이미지 목록을 렌더링

        <FlatList
          data={images}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()} // 각 아이템의 키 설정
          numColumns={numColumns}
          contentContainerStyle={styles.imageList}
        />
      ) : (
        // 이미지가 없는 경우 표시할 텍스트
        <Text style={styles.text}>업로드한 사진이 없습니다.</Text>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

// 스타일 정의
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray900,
    // justifyContent: "center",
  },
  imageList: {},
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    color: "white",
    padding: 20,
  },
  text: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
