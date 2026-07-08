import { ScheduleFormData } from "@/types/appTypes";

export const validateSchedule = (data: ScheduleFormData) => {
  const errors: Partial<Record<keyof ScheduleFormData, string>> = {};

  if (!data.studentId) {
    errors.studentId = "اختر الطالب";
  }

  if (!data.dateTime) {
    errors.dateTime = "اختر موعد الحصة";
  }

  if (!data.duration || data.duration <= 0) {
    errors.duration = "ادخل مدة صحيحة";
  }

  return errors;
};