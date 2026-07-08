import { Schedule, ScheduleFormData } from '@/types/appTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'schedule';

// =========================
// GET Schedules
// =========================
export const getSchedules = async (): Promise<Schedule[]> => {
  try {
    const data = await AsyncStorage.getItem(KEY);

    if (!data) return [];

    const schedules: Schedule[] = JSON.parse(data);

    return schedules.map((schedule) => ({
      ...schedule,
      dateTime: new Date(schedule.dateTime),
    }));
  } catch (error) {
    console.log("Error getting schedules", error);
    return [];
  }
};
 
// =========================
// ADD Scehedule
// =========================
export const addSchedule = async (
  scheduleData: ScheduleFormData,
)
: Promise <Schedule> => {
    console.log('formData inside addsession storage',scheduleData)
  try {
    
    const oldSchedules = await getSchedules();
    const schedule:Schedule = {
      id: Date.now(),
      ...scheduleData,
    };
    const updatedSchedules = [...oldSchedules, schedule];

    await AsyncStorage.setItem(
     KEY,
      JSON.stringify(updatedSchedules)
    );
    return schedule;
  } catch (error) {
    console.log("Error adding group", error);
    throw error;
  }
};


//------- delete schedule -------//
export const deleteSchedule = async (id: number) => {
  try {
    const data = await getSchedules();
    const updated = data.filter((schedule: Schedule) => schedule.id !== id);
    await AsyncStorage.setItem(KEY, JSON.stringify(updated));
  } catch (error) {
    console.log("Error deleting group", error);
  }
};


//----------- update Schedule -------//
export const updateSchedule = async (newData:Schedule) => {
  try {
    const data = await getSchedules();
    const updated = data.map((schedule: Schedule) =>
      schedule.id === newData.id ? { ...schedule, ...newData } : schedule
    );
    await AsyncStorage.setItem(KEY, JSON.stringify(updated));
  } catch (error) {
    console.log("Error updating group", error);
  }
}

