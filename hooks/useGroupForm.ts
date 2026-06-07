import { Group, GroupFormData } from "@/types/appTypes";
import { validateGroup } from "@/utils/validateGroup";
import { useState } from "react";

const emptyGroup: GroupFormData = {
  nameAr: "",
  nameEn: "",
  color: "",
  students: [], // ✅ لازم تكون IDs فقط
  notes: "",
};

export function useGroupForm(initial?: Group) {
  const [formData, setFormData] = useState<GroupFormData>(
    initial
      ? {
          nameAr: initial.nameAr ?? "",
          nameEn: initial.nameEn ?? "",
          color: initial.color ?? "",
          students: (initial.students as any) ?? [],
          notes: initial.notes ?? "",
        }
      : emptyGroup
  );

  const [errors, setErrors] = useState<Record<string, string>>({});

  const reset = () => {
    setFormData(emptyGroup);
    setErrors({});
  };

  const validate = () => {
    // 🔒 حماية من undefined + normalization
    const safeData: GroupFormData = {
      nameAr: formData.nameAr ?? "",
      nameEn: formData.nameEn ?? "",
      color: formData.color ?? "",
      students: formData.students ?? [],
      notes: formData.notes ?? "",
    };

    const validationErrors = validateGroup(safeData);

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