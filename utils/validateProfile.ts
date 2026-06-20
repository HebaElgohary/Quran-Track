export type TeacherProfileForm = {
  nameAr: string;
  nameEn: string;
};

// Arabic letters range
const arabicRegex = /[\u0600-\u06FF]/g;

// English letters
const englishRegex = /[A-Za-z]/g;

const hasArabic = (text: string) => arabicRegex.test(text);
const hasEnglish = (text: string) => englishRegex.test(text);

// count language characters
const countArabic = (text: string) => (text.match(arabicRegex) || []).length;
const countEnglish = (text: string) => (text.match(englishRegex) || []).length;

export const validateProfile = (data: TeacherProfileForm) => {
  const errors: Partial<Record<keyof TeacherProfileForm, string>> = {};

  const nameAr = data.nameAr.trim();
  const nameEn = data.nameEn.trim();

  // -------------------------
  // Arabic name validation (flexible)
  // -------------------------
  if (!nameAr) {
    errors.nameAr = "اسم المعلم بالعربية مطلوب";
  } else {
    const arabicCount = countArabic(nameAr);
    const englishCount = countEnglish(nameAr);

    // must contain some Arabic
    if (!hasArabic(nameAr)) {
      errors.nameAr = "يفضل إدخال الاسم بالعربية";
    }

    // block if English dominates Arabic
    else if (englishCount > arabicCount) {
      errors.nameAr = "الاسم العربي يجب أن يكون باللغة العربية بشكل أساسي";
    }
  }

  // -------------------------
  // English name validation (flexible)
  // -------------------------
  if (!nameEn) {
    errors.nameEn = "Teacher name is required";
  } else {
    const arabicCount = countArabic(nameEn);
    const englishCount = countEnglish(nameEn);

    if (!hasEnglish(nameEn)) {
      errors.nameEn = "Please use English letters (or mix allowed)";
    }

    // allow mixing but enforce English dominance
    else if (arabicCount > englishCount) {
      errors.nameEn = "English name should be mainly in English";
    }
  }

  return errors;
};