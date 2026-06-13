import { ScheduleFormData } from "@/types/appTypes";

export const validateSchedule = (data: ScheduleFormData) => {
  const errors: Partial<Record<keyof ScheduleFormData, string>> = {};

  if (!data.studentId || data.studentId === 0) {
    errors.studentId = "اختر الطالب";
  }

  if (!data.date?.trim()) {
    errors.date = "ادخل تاريخ الموعد";
  }

  if (!data.time?.trim()) {
    errors.time = "ادخل وقت الموعد";
  }

  if (!data.duration || Number(data.duration) <= 0) {
    errors.duration = "ادخل مدة صحيحة";
  }

  return errors;
};