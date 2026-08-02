import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Toast from "react-native-toast-message";

import * as Notifications from "expo-notifications";
import { SafeAreaProvider } from "react-native-safe-area-context";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});
export default function Layout() {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="splash" />
          <Stack.Screen name="onboarding" />
          <Stack.Screen name="(drawer)" />
        </Stack>
        <Toast />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
