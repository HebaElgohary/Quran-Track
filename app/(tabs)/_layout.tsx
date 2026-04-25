import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
        <Tabs.Screen name="groups" />
        <Tabs.Screen name="settings" />
        <Tabs.Screen name="students" />
        
    </Tabs>
  )
}
