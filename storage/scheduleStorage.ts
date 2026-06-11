import { Schedule } from '@/types/appTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'schedule';

// =========================
// GET Sessions
// =========================
 export const getSchedules = async (): Promise<Schedule[]> => {
  try {
    const data = await AsyncStorage.getItem(KEY);

    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log("Error getting groups", error);
    return [];
  }

};