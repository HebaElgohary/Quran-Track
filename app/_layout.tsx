import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Stack } from "expo-router";
import Toast from "react-native-toast-message";

import * as Notifications from "expo-notifications";
import { SafeAreaProvider } from "react-native-safe-area-context";
export default function Layout() {
  Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
          <SafeAreaProvider>

      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(drawer)" />
      </Stack>
        <Toast/>
    </SafeAreaProvider>

    </GestureHandlerRootView>
  );
}