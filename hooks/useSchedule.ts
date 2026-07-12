import {
  addSchedule,
  deleteSchedule,
  getSchedules,
  updateSchedule,
} from "@/storage/scheduleStorage";
import { Schedule, ScheduleFormData } from "@/types/appTypes";
import { scheduleSessionNotification } from "@/utils/scheduleSessionNotification";
import * as Notifications from "expo-notifications";
import { useEffect, useState } from "react";
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
    try {
      const notificationIds = await scheduleSessionNotification(
        formData.dateTime,
      );

      await addSchedule({
        ...formData,
        notificationIds,
      });
      await loadSchedules();
    } catch (error) {
      console.log("Error creating group", error);
    }
  };

  // =========================
  // UPDATE Schedule
  // =========================
  const editSchedule = async (updatedSchedule: Schedule) => {
    try {
      // إلغاء الإشعار القديم
      if (updatedSchedule.notificationIds?.length) {
        await Promise.all(
          updatedSchedule.notificationIds.map((id) =>
            Notifications.cancelScheduledNotificationAsync(id),
          ),
        );
      }

      const notificationIds = await scheduleSessionNotification(
        updatedSchedule.dateTime,
      );

      await updateSchedule({
        ...updatedSchedule,
        notificationIds,
      });
      await loadSchedules();
    } catch (error) {
      console.log("Error updating schedule", error);
    }
  };

  // =========================
  // DELETE Schedule
  // =========================
  const removeSchedule = async (scheduleId: number) => {
    try {
      const schedule = schedules.find((s) => s.id === scheduleId);

      if (schedule?.notificationIds?.length) {
        await Promise.all(
          schedule.notificationIds.map((id) =>
            Notifications.cancelScheduledNotificationAsync(id),
          ),
        );
      }

      await deleteSchedule(scheduleId);

      await loadSchedules();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadSchedules();
  }, []);

  return {
    schedules,
    loading,
    loadSchedules,
    createSchedule,
    editSchedule,
    removeSchedule,
  };
};
