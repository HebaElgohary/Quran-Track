import { MonthlyReports } from "@/types/appTypes";

export const validateMonthlyReports = (data: MonthlyReports) => {
  const errors: Partial<Record<keyof MonthlyReports, string>> = {};

  // studentId
  if (!data.studentId || data.studentId === 0) {
    errors.studentId = "اختر الطالب";
  }

  // month
  if (!data.month?.trim()) {
    errors.month = "الشهر مطلوب";
  }

  // year
  if (!data.year || data.year < 2000) {
    errors.year = "السنة غير صحيحة";
  }

  return errors;
};