import * as React from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { BottomSheetModal, BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { MotiView, MotiText, useDynamicAnimation } from "moti";
import { MaterialIcons } from "@expo/vector-icons";
import { PlusIcon } from "./ui/icons";
import { colorPalette } from "@/styles/colors";
import { usePermission } from "@/hooks/use-permission";

const _spacing = 16;

export default function CustomBottomSheet() {
  const { onCamera, onGallery } = usePermission();

  const bottomSheetModalRef = React.useRef(null);
  const dynamicAnimation = useDynamicAnimation(() => ({
    opacity: 0,
    translateY: 90,
  }));

  const snapPoints = React.useMemo(() => ["60%"], []);

  const showModal = React.useCallback(() => {
    //@ts-expect-error no type def
    bottomSheetModalRef.current?.present();
    setTimeout(
      () =>
        dynamicAnimation.animateTo((current) => ({
          ...current,
          opacity: 1,
          translateY: 0,
        })),
      200
    );
  }, []);

  const hideModal = React.useCallback(() => {
    //@ts-expect-error no type def
    bottomSheetModalRef.current?.dismiss();
    dynamicAnimation.animateTo((current) => ({
      ...current,
      opacity: 0,
      translateY: 90,
    }));
  }, []);

  return (
    <View>
      <Pressable onPress={showModal}>
        <PlusIcon fill={colorPalette.gradient100} />
      </Pressable>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        keyboardBehavior="interactive"
        keyboardBlurBehavior="restore"
        snapPoints={snapPoints}
        backgroundStyle={{
          backgroundColor: colorPalette.gray400,
        }}
        handleComponent={() => (
          <Pressable onPress={hideModal}>
            <View
              style={{
                height: 64,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MaterialIcons
                name="keyboard-arrow-down"
                size={36}
                color="#053eff"
                style={{ transform: [{ scaleX: 1.4 }] }}
              />
            </View>
          </Pressable>
        )}
      >
        <View
          style={{
            gap: 14,
            flex: 1,
          }}
        >
          <MotiView
            state={dynamicAnimation}
            delay={150}
            style={{ justifyContent: "center" }}
          >
            <Pressable onPress={onCamera}>
              <View
                style={{
                  alignItems: "flex-start",
                  justifyContent: "center",
                  paddingLeft: 20,
                }}
              >
                <Text style={{ fontSize: 20, color: "#fff" }}>
                  카메라로 촬영하기
                </Text>
              </View>
            </Pressable>
          </MotiView>
          <MotiView
            state={dynamicAnimation}
            delay={250}
            style={{ justifyContent: "center" }}
          >
            <Pressable onPress={onGallery}>
              <View
                style={{
                  alignItems: "flex-start",
                  justifyContent: "center",
                  paddingLeft: 20,
                }}
              >
                <Text style={{ fontSize: 20, color: "#fff" }}>
                  갤러리에서 선택하기
                </Text>
              </View>
            </Pressable>
          </MotiView>
        </View>
      </BottomSheetModal>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 46,
    color: "#fff",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  logo: {
    padding: _spacing,
    backgroundColor: "#fff",
    position: "absolute",
    top: Constants.statusBarHeight,
    left: 0,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
