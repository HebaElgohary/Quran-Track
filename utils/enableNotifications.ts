import * as Notifications from "expo-notifications";

const enableNotifications = async () => {
    
  const { status } =
    await Notifications.requestPermissionsAsync();

  if (status !== "granted") {
    alert("يجب السماح بالإشعارات");
    return;
  }

  alert("تم تفعيل الإشعارات");
};