import { useState } from "react";
import { Student, StudentFormData } from "@/types/appTypes";
import { validateStudent } from "@/utils/validateStudent";

export function useStudentForm(initial?: Student) {
  const [formData, setFormData] = useState<StudentFormData|Student>(
    initial || {
      nameAr: "",
      nameEn: "",
      level: "مبتدئ",
      notes: "",
    }
  );

  const [errors, setErrors] = useState< Record<string, string>>({});

  const reset = () => {
    setFormData({
      nameAr: "",
      nameEn: "",
      level: "مبتدئ",
      notes: "",
    });
    setErrors({});
  };

  const validate = () => {
    const validationErrors = validateStudent(formData);
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
}