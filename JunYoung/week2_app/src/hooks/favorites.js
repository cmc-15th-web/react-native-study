import { create } from "zustand";

// zustand를 사용하여 즐겨찾기 상태를 관리하는 스토어 생성
const useFavoritesStore = create((set) => ({
  favorites: [], // 즐겨찾기 항목을 저장하는 배열, 초기값은 빈 배열

  // 즐겨찾기 항목을 추가하는 함수
  addFavorite: (location) =>
    set((state) => ({
      favorites: [...state.favorites, location], // 현재 favorites 배열에 새로운 location 항목을 추가
    })),
}));

export default useFavoritesStore;
