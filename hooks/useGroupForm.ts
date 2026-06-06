import { Group, GroupFormData } from "@/types/appTypes";
import { validateGroup } from "@/utils/validateGroup";
import { useState } from "react";

export function useGroupForm(initial?: GroupFormData) {
  const [formData, setFormData] = useState<GroupFormData>(
    initial || {
      nameAr: "",
      nameEn: "",
      color: "",
      students: [],
      notes: "",
    },
  );
  const [errors, setErrors] = useState<Record<string, string>>({});

  const reset = () => {
    setFormData({
      nameAr: "",
      nameEn: "",
      color: "",
      students: [],
      notes: "",
    });
    setErrors({});
  };
  const validate = () => {
    const validationErrors = validateGroup(formData);
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  return {
    formData,
    setFormData,
    validate,
    errors,
    setErrors,
    reset,
  };
}
