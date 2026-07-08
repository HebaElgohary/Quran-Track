import AsyncStorage from "@react-native-async-storage/async-storage";

const NOTIFICATIONS_KEY = "notificationsEnabled";

export const setNotificationsEnabled = async (enabled: boolean) => {
  await AsyncStorage.setItem(
    NOTIFICATIONS_KEY,
    JSON.stringify(enabled)
  );
};

export const getNotificationsEnabled = async (): Promise<boolean> => {
  const value = await AsyncStorage.getItem(NOTIFICATIONS_KEY);

  return value ? JSON.parse(value) : false;
};