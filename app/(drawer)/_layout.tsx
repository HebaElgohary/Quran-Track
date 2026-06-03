
import Title from "@/components/atoms/Title";
import { colors } from "@/constants/theme";
import { Feather } from "@expo/vector-icons";

import { Drawer } from "expo-router/drawer";

import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import { Text, View } from "react-native";


export default function Layout() {
  return (
    <Drawer
      drawerContent={(props) => (
        <DrawerContentScrollView {...props}>
          {/* HEADER */}
          <View
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              alignItems: "center",
              gap: 5,
              marginVertical: 15,
              paddingHorizontal: 15,
            }}
          >
            {/* ICON */}
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: colors.warning,
              }}
            >
              <Feather
                name="moon"
                size={25}
                color={colors.btnPrimary}
              />
            </View>

            {/* APP INFO */}
            <View>
              <Title size="xl" variant="white">
                متابعة القران
              </Title>

              <Text
                style={{
                  color: colors.secondary,
                  textAlign: "right",
                }}
              >
                القران والتجويد
              </Text>
            </View>
          </View>

          {/* WELCOME */}
          <View
            style={{
              marginBottom: 40,
              marginHorizontal: 20,
            }}
          >
            <Title variant="secondary" size="md">
              مرحبًا استاذ
            </Title>

            <Title variant="white" size="xl">
              معاذ
            </Title>
          </View>

          {/* DRAWER ITEMS */}
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      )}
      screenOptions={{
        headerShown: true,

        drawerPosition: "right",

        sceneStyle: {
          backgroundColor: colors.background,
        },

        drawerActiveBackgroundColor: colors.warning,

        drawerActiveTintColor: colors.btnPrimary,

        drawerInactiveTintColor: "#ffffff",

        drawerStyle: {
          backgroundColor: colors.btnPrimary,
        },
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
            <Feather
              name="folder-minus"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Sessions"
        options={{
          title: "الحصص",

          drawerIcon: ({ color, size }) => (
            <Feather name="book" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Schedule"
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
            <Feather
              name="file-text"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Settings"
        options={{
          title: "الإعدادات",

          drawerIcon: ({ color, size }) => (
            <Feather
              name="settings"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Drawer>
  );
}

