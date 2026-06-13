import { Schedule, ScheduleFormData, Student } from "@/types/appTypes";
import { validateSchedule } from "@/utils/validateSchedule";
import { useState } from "react";

export const useScheduleForm = (initial?: Schedule) => {
  const [formData, setFormData] = useState<ScheduleFormData>(
    initial || {
  studentId: 0,
      date: "",
      time: "",
      duration: 0,
      notes: "",
    },
  );

  const [errors, setErrors] = useState<Record<string, string>>({});

  const reset = () => {
    setFormData( {
      studentId: 0,
      date: "",
      time: "",
      duration: 0,
      notes: "",
    });
    setErrors({});
  };

  const validate = () => {
    const validationErrors = validateSchedule(formData);
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
