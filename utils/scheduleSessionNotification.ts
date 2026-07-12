import * as Notifications from "expo-notifications";
import { Platform } from "react-native";
import { getNotificationsEnabled } from "@/storage/settingsStorage";

export async function scheduleSessionNotification(
  dateTime: Date
): Promise<string[]> {
  const enabled = await getNotificationsEnabled();

  if (!enabled) return [];

  if (Platform.OS === "web") return [];

  const minutesBefore = [15, 10, 5];

  const ids: string[] = [];

  for (const minutes of minutesBefore) {
    const notificationDate = new Date(dateTime);

    notificationDate.setMinutes(
      notificationDate.getMinutes() - minutes
    );

    if (notificationDate <= new Date()) continue;

    const id =
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "موعد الحصة",
          body: `باقي ${minutes} ${
            minutes === 1 ? "دقيقة" : "دقائق"
          } على الحصة`,
          sound: true,
        },
        trigger: {
          type: Notifications.SchedulableTriggerInputTypes.DATE,
          date: notificationDate,
        },
      });

    ids.push(id);
  }

  return ids;
}