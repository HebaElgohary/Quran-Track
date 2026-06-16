import { MonthlyReports, MonthlyReportsFormData } from "@/types/appTypes";
import { validateMonthlyReports } from "@/utils/validateMonthlyReports";
import { useState } from "react";

export const useMonthlyReportsForm = (initial?: MonthlyReports) => {
  const [formData, setFormData] = useState<MonthlyReportsFormData>(
    initial || {
  studentId: 0,
  month: '',
  year: '',
    } 
  );

  const [errors, setErrors] = useState<Record<string, string>>({});

  const reset = () => {
    setFormData(  {
  studentId: 0,
  month: '',
  year: '',
    } );
    setErrors({});
  };


const validate = () => {
  const validationErrors = validateMonthlyReports(formData);

  console.log("formData", formData);
  console.log("validationErrors", validationErrors);

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
