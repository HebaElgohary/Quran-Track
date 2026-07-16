import { GroupFormData } from "@/types/appTypes";

export type GroupErrors = Partial<Record<keyof GroupFormData, string>>;

export function validateGroup(data: GroupFormData) {
  const errors: GroupErrors = {};

  // -----------------------
  // الاسم بالعربي
  // -----------------------vali
  if (!data.nameAr || data.nameAr.trim().length === 0) {
    errors.nameAr = "الاسم بالعربية مطلوب";
  } else if (data.nameAr.trim().length < 3) {
    errors.nameAr = "الاسم يجب أن يكون 3 أحرف على الأقل";
  }

  // -----------------------
  // الاسم بالإنجليزي
  // -----------------------
  if (!data.nameEn || data.nameEn.trim().length === 0) {
    errors.nameEn = "الاسم بالإنجليزية مطلوب";
  } else if (!/^[a-zA-Z\s]+$/.test(data.nameEn)) {
    errors.nameEn = "الاسم يجب أن يكون حروف إنجليزية فقط";
  }

  // -----------------------
  // اللون
  // -----------------------
  if (data.color === undefined || data.color === null) {
    errors.color = "يجب اختيار لون المجموعة";
  }

  // -----------------------
  // الطلاب
  // -----------------------
  if (!data.students || data.students.length === 0) {
    errors.students = "يجب اختيار طالب واحد على الأقل";
  }

  // -----------------------
  // الملاحظات (اختياري)
  // -----------------------
  if (data.notes && data.notes.length > 200) {
    errors.notes = "الملاحظات لا يجب أن تتجاوز 200 حرف";
  }

  return errors;
}