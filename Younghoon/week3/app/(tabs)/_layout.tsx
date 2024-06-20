import { HomeIcon, PlusIcon, ThemeIcon } from "@/components/ui/icons";
import { colorPalette } from "@/styles/colors";
import { Tabs } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          borderColor: colorPalette.gray600,
          backgroundColor: colorPalette.gray900,
        },
        tabBarActiveTintColor: colorPalette.purple,
      }}
      sceneContainerStyle={{ backgroundColor: colorPalette.gray900 }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "홈",
          tabBarIcon: ({ focused }) => (
            <HomeIcon
              fill={focused ? colorPalette.gradient100 : colorPalette.gray400}
            />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="plus"
        options={{
          title: "",
          tabBarIcon: () => (
            <TouchableOpacity onPress={() => {}}>
              <PlusIcon fill={colorPalette.gradient100} />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "설정",
          tabBarIcon: ({ focused }) => (
            <ThemeIcon
              fill={focused ? colorPalette.gradient100 : colorPalette.gray400}
            />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}

// url(#paint0_linear_767_318)
