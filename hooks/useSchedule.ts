import { addSchedule, deleteSchedule, getSchedules, updateSchedule } from "@/storage/scheduleStorage";
import { Schedule, ScheduleFormData } from "@/types/appTypes";
import { scheduleSessionNotification } from "@/utils/scheduleSessionNotification";
import { use, useEffect, useState } from "react";
import * as Notifications from "expo-notifications";
export const useSchedule = () => {
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [loading, setLoading] = useState(false);


  // =========================
  // LOAD Schedules
  // =========================
  const loadSchedules = async () => {
    try {
      setLoading(true);
      const data = await getSchedules();
      setSchedules(data);
      return data;
    } catch (error) {
      console.log("Error loading groups", error);
    } finally {
      setLoading(false);
    }
  };

  
  // =========================
  // CREATE Schedule 
  // =========================
   const createSchedule = async (formData: ScheduleFormData) => {
      console.log("formdata createSession", formData);
      const { studentId, ...rest } = formData;
      console.log('student id in createStudent',studentId)
      try {
      await addSchedule(formData);
      await loadSchedules();
      } catch (error) {
        console.log("Error creating group", error);
      }
    };

     // =========================
        // UPDATE Schedule
        // =========================
    const editSchedule = async (
  updatedSchedule: Schedule
) => {
  try {
    // إلغاء الإشعار القديم
    if (updatedSchedule.notificationId) {
      await Notifications.cancelScheduledNotificationAsync(
        updatedSchedule.notificationId
      );
    }

    // إنشاء إشعار جديد
    const newNotificationId =
      await scheduleSessionNotification(
        updatedSchedule
      );

    // تحديث البيانات
    await updateSchedule({
      ...updatedSchedule,
      notificationId: newNotificationId,
    });

    await loadSchedules();
  } catch (error) {
    console.log(
      "Error updating schedule",
      error
    );
  }
};
    
          // =========================
          // DELETE Schedule
          // =========================
     const removeSchedule = async (
  schedule: Schedule
) => {
  try {
    if (schedule.notificationId) {
      await Notifications.cancelScheduledNotificationAsync(
        schedule.notificationId
      );
    }

    await deleteSchedule(schedule.id);

    await loadSchedules();
  } catch (error) {
    console.log(error);
  }
};
    useEffect(() => {
    loadSchedules();
  }, []);
  

  return { schedules, loading, loadSchedules,createSchedule ,editSchedule,removeSchedule};
};
