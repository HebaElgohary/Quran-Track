import React, { useEffect, useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { colors } from "@/constants/theme";
import { useToast } from "@/hooks/useToast";
import { enableNotifications } from "@/utils/enableNotifications";
import {
  getNotificationsEnabled,
  setNotificationsEnabled,
} from "@/storage/settingsStorage";

export default function NotificationCard() {
  const { showInfo } = useToast();

  const [notificationEnabled, setNotificationEnabled] = useState(false);

  useEffect(() => {
    const loadNotificationsState = async () => {
      const enabled = await getNotificationsEnabled();
      setNotificationEnabled(enabled);
    };

    loadNotificationsState();
  }, []);

  const handleNotification = async () => {
    // Disable notifications
    if (notificationEnabled) {
      await setNotificationsEnabled(false);
      setNotificationEnabled(false);

      showInfo("تم إلغاء تفعيل التنبيهات");
      return;
    }

    // Enable notifications
    const granted = await enableNotifications();

    if (!granted) {
      showInfo("لم يتم منح إذن الإشعارات");
      return;
    }

    await setNotificationsEnabled(true);
    setNotificationEnabled(true);

    showInfo("تم تفعيل التنبيهات");
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Feather
          name={notificationEnabled ? "bell" : "bell-off"}
          size={22}
          color={colors.warning}
        />

        <View style={{ flex: 1 }}>
          <Text style={styles.title}>التنبيهات</Text>

          <Text style={styles.description}>
            فعّل التنبيهات ليقوم التطبيق بتذكيرك قبل موعد الحصة بـ 15 دقائق.
          </Text>
        </View>
      </View>

      <Switch
        value={notificationEnabled}
        onValueChange={handleNotification}
        trackColor={{
          false: "#D1D5DB",
          true: colors.primary,
        }}
        thumbColor="#FFFFFF"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    backgroundColor: "#F1E7D0",
    borderColor: colors.warning,
    borderWidth: 1,
    borderRadius: 16,

    margin: 10,
    padding: 15,
    gap: 12,
  },

  leftSection: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  title: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 2,
  },

  description: {
    fontSize: 12,
    color: "#555",
    lineHeight: 18,
  },
});