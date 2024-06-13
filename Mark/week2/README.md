# 2주차 과제: 지도 구현

## 주요 기능

### 1. **지도 불러오기**: 웹 페이지와 앱에서 지도를 띄웁니다. ✅

### 2. **지도 상호 작용**: 확대, 축소 및 드래그 이동 기능을 구현합니다. ✅

### 3. **현재 위치 표시**: 사용자의 현재 위치를 지도에 표시합니다. ✅

### 4. **즐겨찾기 기능**: 즐겨찾기 위치를 추가하고, 해당 목록을 관리합니다. ✅

<br/>
<br/>

## 폴더 구조

### 1. app

```
app
├── assets
|  ├── HomeSvg.tsx
|  ├── StarBtnSvg.tsx
|  ├── StarSvg.tsx
|  └── TrashCanSvg.tsx
├── components
|  ├── BottomNavigator.tsx
|  ├── StackNavigator.tsx
|  └── StarItem.tsx
├── constants
|  └── palette.ts
├── screens
|  ├── Home.tsx
|  └── Stars.tsx
├── store
|  └── store.ts
├── tree.txt
└── types
   ├── declarations.d.ts
   ├── navigation.d.ts
   └── types.d.ts
```

### 2. web

```
web
├── App.tsx
├── assets
|  └── StarSvg.tsx
├── components
|  ├── NaverMap.style.ts
|  └── NaverMap.tsx
├── constants
|  └── palette.ts
├── index.css
├── index.tsx
├── store
|  └── store.ts
├── types
   ├── declarations.d.ts
   └── types.d.ts
```

<br/>
<br/>

## 기술 스택

### 1. app

- react-native
- typescript
- zustand
- react-native-webview

### 2. web

- react
- typescript
- styled-components
- zustand
- navermaps api

<br/>
<br/>

## 트러블슈팅 문서

### [지도 구현 트러블슈팅 문서](https://leesunho.notion.site/cmc-1662037b21ed4c4382ff56cefaf661af?pvs=4)

<br/>
<br/>

## 시연 영상.gif

![과제2 시연](https://github.com/cmc-15th-web/react-native-study/assets/69356432/9a7ceb4d-1ba6-4d9e-9d9d-125df1390895)
