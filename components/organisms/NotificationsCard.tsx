import React from "react";
import { Text, View } from "react-native";
import Button from "../atoms/Button";
import { Feather } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { colors } from "@/constants/theme";
import * as Notifications from "expo-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { enableNotifications } from "@/utils/enableNotifications";
export default function NotificationCard() {

  return (
    <View style={styles.container}>
      <Feather
        name="bell"
        size={20}
        color="gray"
      />

      <Text style={{ fontSize: 12, flex: 1 }}>
        لتعمل التنبيهات الصوتية، يجب
        تفعيلها مرة واحدة.
      </Text>

      <Button
        size="xl"
        onClick={enableNotifications}
      >
        تفعيل وضع التنبيه
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F1E7D0",
    margin: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: colors.warning,
    borderRadius: 16,
    gap: 12,
  },
});