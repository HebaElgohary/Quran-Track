import { Session } from '@/types/appTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'session';
 export const getSessions = async (): Promise<Session[]> => {
  try {
    const data = await AsyncStorage.getItem(KEY);

    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log("Error getting groups", error);
    return [];
  }

  
};


 