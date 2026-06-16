import { MonthlyReports, MonthlyReportsFormData } from "@/types/appTypes";

export const validateMonthlyReports = (data: MonthlyReportsFormData) => {
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
  if (!data.year || Number(data.year) < 2026) {
    errors.year = "السنة غير صحيحة";
  }

  return errors;
};