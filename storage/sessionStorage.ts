import { Session, SessionFormData } from '@/types/appTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'session';

// =========================
// GET Sessions
// =========================
 export const getSessions = async (): Promise<Session[]> => {
  try {
    const data = await AsyncStorage.getItem(KEY);

    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log("Error getting groups", error);
    return [];
  }

};
  
// =========================
// ADD Session
// =========================
export const addSession = async (
  Session:SessionFormData,
): Promise <Session> => {
    console.log('formData inside addsession storage',Session)
  try {
    
    const oldSessions = await getSessions();


    const session:Session = {
      id: Date.now(),
      ...Session,
    };
    const updatedSessions = [...oldSessions, session];

    await AsyncStorage.setItem(
     KEY,
      JSON.stringify(updatedSessions)
    );
    return session;
  } catch (error) {
    console.log("Error adding group", error);
    throw error;
  }
};

//------- delete Session -------//
export const deleteSession = async (id: number) => {
  try {
    const data = await getSessions();
    const updated = data.filter((session: Session) => session.id !== id);
    await AsyncStorage.setItem(KEY, JSON.stringify(updated));
  } catch (error) {
    console.log("Error deleting group", error);
  }
};





 