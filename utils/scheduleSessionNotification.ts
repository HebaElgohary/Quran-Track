// utils/scheduleNotification.ts
import * as Notifications from "expo-notifications";
import { Platform } from "react-native";
import { getNotificationsEnabled } from "@/storage/settingsStorage";


export async function scheduleSessionNotification(
    dateTime: Date
) {
  const enabled = await getNotificationsEnabled();

    if (!enabled) {
  return null;
}

if (Platform.OS==="web") return;

const notificationDate =
    new Date(dateTime);

notificationDate.setMinutes(
    notificationDate.getMinutes()-5
);

if(notificationDate<=new Date()) return;

return await Notifications.scheduleNotificationAsync({
    content:{
        title:"موعد الحصة",
        body:"باقي 5 دقائق على الحصة",
        sound:true
    },
    trigger:{
        type:Notifications.SchedulableTriggerInputTypes.DATE,
        date:notificationDate
    }
});
}