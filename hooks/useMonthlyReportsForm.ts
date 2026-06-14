import { MonthlyReports, MonthlyReportsFormData, Schedule, ScheduleFormData, Student } from "@/types/appTypes";
import { validateSchedule } from "@/utils/validateSchedule";
import { useState } from "react";

export const useMonthlyReportsForm = (initial?: MonthlyReports) => {
  const [formData, setFormData] = useState<MonthlyReportsFormData>(
    initial || {
  studentId: 0,
  month: '',
  year: 0,
    } 
  );

  const [errors, setErrors] = useState<Record<string, string>>({});

  const reset = () => {
    setFormData(  {
  studentId: 0,
  month: '',
  year: 0,
    } );
    setErrors({});
  };

  const validate = () => {
    const validationErrors = validateMonthlyReports(formData);
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  return {
    formData,
    setFormData,
    errors,
    setErrors,
    validate,
    reset,
  };
};
