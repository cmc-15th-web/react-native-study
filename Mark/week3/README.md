# 3주차 과제: 사진 앱 구현

## 주요 기능

### 1. 스플래시 화면 구현 ✅

### 2. 카메라, 사진첩 권한 요청 ✅

### 3. Bottom Sheet 구현 ✅

### 4. 이미지 업로드 구현
- 카메라 ✅
- 갤러리에서 선택 (여러 장 가능) ✅
- 이미지 자르기 ✅

### 5. 사진 클릭 시 정보 띄우기 ✅
<br/>
<br/>

## 폴더 구조

```
├─assets
│      AddBtnSvg.tsx
│      ArrowBackSvg.tsx
│      CameraSvg.tsx
│      GallerySvg.tsx
│      HomeSvg.tsx
│      SettingSvg.tsx
│      
├─components
│      AddPhoto.tsx
│      BottomNavigator.tsx
│      GradientText.tsx
│      StackNavigator.tsx
│      
├─constants
│      palette.ts
│      
├─hooks
│      useImageUpload.ts
│      
├─screens
│      Detail.tsx
│      Home.tsx
│      Setting.tsx
│      
├─store
│      store.ts
│      
├─types
│      declarations.d.ts
│      navigation.d.ts
│      types.d.ts
│      
└─utils
        permissions.ts
```

<br/>
<br/>

## 기술 스택

- react-native
- typescript
- zustand
- react-native-image-crop-picker
- react-native-linear-gradient
- @react-native-masked-view/masked-view
- react-native-permissions
- @gorhom/bottom-sheet
- date-fns
- react-native-splash-screen

<br/>
<br/>

## 트러블슈팅 문서

### [사진 앱 트러블슈팅 문서](https://leesunho.notion.site/3-5888eb40b32e44d79b9340da3d098fd0?pvs=4)

<br/>
<br/>

## 시연 영상.gif

![과제3 시연](https://github.com/cmc-15th-web/react-native-study/assets/69356432/d4eb8d53-d177-41fa-8dd0-016423882fbc)
