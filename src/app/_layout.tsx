import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import "../../global.css";

import { Platform, View } from "react-native";
import { useAuthStore } from "../utils/authStore";
import { useEffect } from "react";

export const unstable_settings = {
  anchor: "(tabs)",
};

const isWeb = Platform.OS === "web";

if (!isWeb) {
  SplashScreen.preventAutoHideAsync();
}

export default function RootLayout() {
  const { hasCompletedOnboarding, isloggedin, _hasHydrated } = useAuthStore();

  // hide the splash screen after the store has been hydrated
  useEffect(() => {
    if (_hasHydrated) {
      SplashScreen.hideAsync();
    }
  }, [_hasHydrated]);

  if (!_hasHydrated && !isWeb) {
    return null;
  }

  return (
    <View className="flex-1">
      <StatusBar style="auto" />

      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Protected guard={isloggedin}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="modal"
            options={{ presentation: "modal", title: "Modal" }}
          />
        </Stack.Protected>

        <Stack.Protected guard={!isloggedin && hasCompletedOnboarding}>
          {/* auth screens */}
        </Stack.Protected>

        <Stack.Protected guard={!hasCompletedOnboarding}>
          <Stack.Screen name="onboarding" options={{ headerShown: false }} />
        </Stack.Protected>
      </Stack>
    </View>
  );
}
