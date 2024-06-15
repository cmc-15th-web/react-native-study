import { create } from "zustand"; // zustand 라이브러리에서 create 함수를 임포트

// Favorite 인터페이스: 위도(latitude)와 경도(longitude) 속성을 가진 즐겨찾기 항목의 구조를 정의
interface Favorite {
  latitude: number;
  longitude: number;
}

// FavoritesState 인터페이스: 즐겨찾기 상태와 관련된 상태와 메서드를 정의
interface FavoritesState {
  favorites: Favorite[]; // 즐겨찾기 항목들의 배열
  addFavorite: (location: Favorite) => void; // 즐겨찾기 항목을 추가하는 함수
  removeFavorite: (index: number) => void; // 즐겨찾기 항목을 삭제하는 함수
}

// zustand 스토어를 생성
const useFavoritesStore = create<FavoritesState>((set) => ({
  favorites: [], // 초기 상태: 빈 배열로 초기화된 즐겨찾기 목록

  // addFavorite 함수: 새로운 즐겨찾기 항목을 추가
  addFavorite: (location) =>
    set((state) => ({
      favorites: [...state.favorites, location], // 현재 즐겨찾기 목록에 새로운 항목을 추가
    })),

  // removeFavorite 함수: 지정한 인덱스의 즐겨찾기 항목을 삭제
  removeFavorite: (index) =>
    set((state) => ({
      favorites: state.favorites.filter((_, i) => i !== index), // 지정한 인덱스를 제외한 새로운 배열을 생성
    })),
}));

export default useFavoritesStore;
