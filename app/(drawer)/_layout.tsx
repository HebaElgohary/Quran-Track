import Title from "@/components/atoms/Title";
import { colors } from "@/constants/theme";
import { Feather } from "@expo/vector-icons";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { Text, View } from "react-native";
import index from ".";
import Groups from "./Groups";
import MonthlyReports from "./MonthlyReports";
import Schedule from "./Schedule";
import Sessions from "./Sessions";
import Settings from "./Settings";
import Students from "./Students";

export default function Layout() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={({ ...props }) => (
        <DrawerContentScrollView>
          <View
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              alignItems: "center",
              gap: 5,
              marginVertical: 15,
            }}
          >
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginVertical: 15,

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
                  marginHorizontal: 25,
                  color: colors.secondary,
                  textAlign: "right",
                }}
              >
                القران والتجويد
              </Text>
            </View>
          </View>
          {/* Welcome section  */}
          <View style={{ marginBottom: 40, marginHorizontal: 20 }}>
            <Title variant="secondary" size="md">
              مرجبا استاذ
            </Title>
            <Title variant="white" size="xl">
              معاذ{" "}
            </Title>
          </View>
          {/* ////////////////////////////////// */}

          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      )}
      screenOptions={{
        drawerPosition: "right",
        sceneStyle: {
          backgroundColor: colors.background,
          minHeight: 300,
          overflow: "scroll",
        },
        drawerActiveBackgroundColor: colors.warning,
        drawerActiveTintColor: colors.btnPrimary,
        drawerInactiveTintColor: "#ffffff",

        drawerItemStyle: {
          borderBlockColor: colors.secondary,
        },
        drawerStyle: {
          backgroundColor: colors.btnPrimary,
        },
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          title: "الرئيسية",
          drawerIcon: () => (
            <Feather name="home" size={20} color={colors.white} />
          ),
        }}
        component={index}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => (
            <Feather name="users" size={20} color={colors.white} />
          ),
        }}
        name="الطلاب"
        component={Students}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => (
            <Feather name="folder-minus" size={20} color={colors.white} />
          ),
        }}
        name="المجموعات"
        component={Groups}
      />

      <Drawer.Screen
        options={{
          drawerIcon: () => (
            <Feather name="book" size={20} color={colors.white} />
          ),
        }}
        name="الحصص"
        component={Sessions}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => (
            <Feather name="calendar" size={20} color={colors.white} />
          ),
        }}
        name="المواعيد"
        component={Schedule}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => (
            <Feather name="file-text" size={20} color={colors.white} />
          ),
        }}
        name="التقارير الشهرية"
        component={MonthlyReports}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => (
            <Feather name="settings" size={20} color={colors.white} />
          ),
        }}
        name="الاعدادات"
        component={Settings}
      />
    </Drawer.Navigator>
  );
}
