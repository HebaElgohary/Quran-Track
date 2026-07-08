import React, { useEffect } from "react";
import { Text, View } from "react-native";
import Button from "../atoms/Button";
import { Feather } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { colors } from "@/constants/theme";
import {enableNotifications} from '@/utils/enableNotifications'
import { getNotificationsEnabled, setNotificationsEnabled } from "@/storage/settingsStorage";


export default function NotificationCard(
  
) {

  const [notificationEnabled, setNotificationEnabled] = React.useState(false);
const handleNotification = async () => {
  if (notificationEnabled) {
    await setNotificationsEnabled(false);
    setNotificationEnabled(false);
    return;
  }

  const granted = await enableNotifications();

  if (granted) {
    await setNotificationsEnabled(true);
    setNotificationEnabled(true);
  }
};
useEffect(() => {

  const load = async () => {
    const enabled = await getNotificationsEnabled();
    setNotificationEnabled(enabled);
  };

  load();
}, []);
  return (
    <View style={styles.container}>

   <Feather name={notificationEnabled ? "bell" : "bell-off"} size={20} color="gray"  />
<Text style={{fontSize:12}}> لتعمل التنبيهات الصوتية، يجب تفعيلها مرة واحدة (تتطلب المتصفحات ذلك). </Text>
<Button size="xl" onClick={handleNotification}>
  {notificationEnabled
    ? "إلغاء تفعيل التنبيهات"
    : "تفعيل التنبيهات"}
</Button>
    </View>
  );
}

 const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent:'space-between',
    alignItems: "center",
    backgroundColor: '#F1E7D0',
    margin: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: colors.warning,
    borderRadius: 16,
    gap: 12,
  },

  
});