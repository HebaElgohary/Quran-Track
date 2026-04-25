import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen name="index" options={{ title: "Home page" }} />
      <Drawer.Screen name="Students" />
      <Drawer.Screen name="Groups" />

      <Drawer.Screen name="Sessions" />
      <Drawer.Screen name="Schedule" />
      <Drawer.Screen name="Monthly-Reports" />
      <Drawer.Screen name="Settings" />
    </Drawer>
  );
}
