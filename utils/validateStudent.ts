import { Student } from "@/types/student";

export const validateStudent = (data: Student) => {
  const errors: Record<string, string> = {};

  // Required fields
  if (!data.nameAr?.trim()) {
    errors.nameAr = "الاسم العربي مطلوب";
  }

  if (!data.nameEn?.trim()) {
    errors.nameEn = "الاسم الانجليزي مطلوب";
  }

  // Arabic validation
  const arabicRegex = /^[\u0600-\u06FF\s]+$/;

  if (
    data.nameAr &&
    !arabicRegex.test(data.nameAr)
  ) {
    errors.nameAr =
      "الاسم العربي يجب ان يحتوي على حروف عربية فقط";
  }

  // English validation
  const englishRegex = /^[A-Za-z\s]+$/;

  if (
    data.nameEn &&
    !englishRegex.test(data.nameEn)
  ) {
    errors.nameEn =
      "الاسم الانجليزي يجب ان يحتوي على حروف انجليزية فقط";
  }

  return errors;
};