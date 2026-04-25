import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen name="index" options={{ title: "Home page" }} />
      <Drawer.Screen name="students" />
      <Drawer.Screen name="groups" />

      <Drawer.Screen name="sessions" />
      <Drawer.Screen name="sechedule" />
      <Drawer.Screen name="monthly-reports" />
      <Drawer.Screen name="settings" />
    </Drawer>
  );
}
