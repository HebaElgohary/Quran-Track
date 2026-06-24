// utils/scheduleNotification.ts
import * as Notifications from "expo-notifications";

export async function scheduleSessionNotification(schedule: {
  date: string;
  time: string;
  AmPm: string;
}) {
  const [hoursStr, minutesStr] = schedule.time.split(":");

  let hours = Number(hoursStr);

  if (schedule.AmPm === "PM" && hours < 12) {
    hours += 12;
  }

  if (schedule.AmPm === "AM" && hours === 12) {
    hours = 0;
  }

  const sessionDate = new Date(schedule.date);

  sessionDate.setHours(hours, Number(minutesStr), 0, 0);

  const notificationDate = new Date(sessionDate.getTime() - 5 * 60 * 1000);

  if (notificationDate <= new Date()) return;

const notificationId =
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "موعد الحصة",
      body: "باقي 5 دقائق على الحصة",
      sound: true,
    },
   trigger: {
  type: Notifications.SchedulableTriggerInputTypes.DATE,
  date: notificationDate,
}
  });

return notificationId;
}
