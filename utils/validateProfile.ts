export type TeacherProfileForm = {
  nameAr: string;
  nameEn: string;
};

export const validateProfile = (
  data: TeacherProfileForm
) => {
  const errors: Partial<
    Record<keyof TeacherProfileForm, string>
  > = {};

  if (!data.nameAr.trim()) {
    errors.nameAr = "اسم المعلم بالعربية مطلوب";
  } else if (data.nameAr.trim().length < 3) {
    errors.nameAr = "الاسم العربي يجب أن يكون 3 أحرف على الأقل";
  }

  if (!data.nameEn.trim()) {
    errors.nameEn = "Teacher name is required";
  } else if (data.nameEn.trim().length < 3) {
    errors.nameEn =
      "Teacher name must be at least 3 characters";
  }

  return errors;
};