import * as Notifications from "expo-notifications";

export const enableNotifications = async (): Promise<boolean> => {
  const { status } = await Notifications.requestPermissionsAsync();

  if (status !== "granted") {
    alert("يجب السماح بالإشعارات");
    return false;
  }

  return true;
};