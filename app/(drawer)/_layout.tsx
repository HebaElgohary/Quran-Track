import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <Drawer>
    
      <Drawer.Screen
        name="students"
        options={{ title: "Students" }}
      />
      <Drawer.Screen
        name="groups"
        options={{ title: "Groups" }}
      />
      <Drawer.Screen
        name="settings"
        options={{ title: "Settings" }}
      />
    </Drawer>
  );
}