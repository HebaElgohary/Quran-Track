import Title from "@/components/atoms/Title";
import { colors } from "@/constants/theme";
import { useProfile } from "@/hooks/useProfile";
import { Feather } from "@expo/vector-icons";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import React, { useEffect } from "react";
import { Text, View } from "react-native";

function CustomDrawerContent(props: any) {
  const { profile, loadProfile } = useProfile();

  useEffect(() => {
    loadProfile();
  }, [profile]);

  return (
    <DrawerContentScrollView {...props} style={{ flex: 1 }}>
      {/* HEADER (YOUR DESIGN PRESERVED) */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          gap: 5,
          marginVertical: 15,
          paddingHorizontal: 15,
        }}
      >
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: colors.warning,
          }}
        >
          <Feather name="moon" size={25} color={colors.btnPrimary} />
        </View>

        <View>
          <Title size="xl" variant="white">
            متابعة القران
          </Title>

          <Text
            style={{
              color: colors.secondary,
              textAlign: "right",
              alignSelf: "flex-start",
            }}
          >
            القران والتجويد
          </Text>
        </View>
      </View>

      {/* WELCOME (PRESERVED) */}
      <View style={{ marginBottom: 40, marginHorizontal: 20 }}>
        <Title variant="secondary" size="md">
          مرحبًا استاذ
        </Title>

        <Title variant="white" size="xl">
          {profile.nameAr}
        </Title>
      </View>

      {/* DRAWER ITEMS */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default function Layout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: true,
        swipeEnabled: true,

        // IMPORTANT FIX (this is what was breaking your app)
        drawerPosition: "right",
        drawerType: "front",

        overlayColor: "rgba(0,0,0,0.4)",

        drawerStyle: {
          backgroundColor: colors.btnPrimary,
          width: 280,
        },

        sceneStyle: {
          backgroundColor: colors.background,
        },

        drawerActiveBackgroundColor: colors.warning,
        drawerActiveTintColor: colors.btnPrimary,
        drawerInactiveTintColor: "#fff",
      }}
    >
      <Drawer.Screen
        name="index"
        options={{

          title: "الرئيسية",
          drawerIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Students"
        options={{
          title: "الطلاب",
          drawerIcon: ({ color, size }) => (
            <Feather name="users" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Groups"
        options={{
          title: "المجموعات",
          drawerIcon: ({ color, size }) => (
            <Feather name="folder" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Sessions"
        options={{
          title: " تقارير الحصص",
          drawerIcon: ({ color, size }) => (
            <Feather name="book" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Schedules"
        options={{
          title: "المواعيد",
          drawerIcon: ({ color, size }) => (
            <Feather name="calendar" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="MonthlyReports"
        options={{
          title: "التقارير الشهرية",

          drawerIcon: ({ color, size }) => (
            <Feather name="file-text" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        options={{
          title: "الإعدادات",
          drawerIcon: ({ color, size }) => (
            <Feather name="settings" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}
