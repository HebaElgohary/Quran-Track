import { Session, SessionFormData } from "@/types/appTypes";
import { validateSession } from "@/utils/validateSession";
import { useState } from "react";

export const useSessionForm = (initial?: Session) => {
const [formData, setFormData] = useState<SessionFormData>(initial || {
    studentId: 0,
    date: "",
    surah: "",
    grade: "مقبول",
    notes: "",
    from: 0,
    to: 0,
    new: "",
    revision: "",
    tajweed: "",
});

  const [errors, setErrors] = useState< Record<string, string>>({});

  const reset = () => {
    setFormData({
       studentId: 0,
    date: "",
    surah: "",
    grade: "",
    notes: "",
    from:0 ,
    to: 0,
    new: "",
    revision: "",
    tajweed: "",
    });
    setErrors({});
  };

  const validate = () => {
    const validationErrors = validateSession(formData);
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