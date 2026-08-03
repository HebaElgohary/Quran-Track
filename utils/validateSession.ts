import { surahMap } from "@/translations/surahMap";
import { Session, SessionFormData } from "@/types/appTypes";

export const validateSession = (
  data: Session | SessionFormData
) => {
  const errors: Record<string, string> = {};

  // -------------------------
  // Required fields
  // -------------------------

  if (!data.studentId) {
    errors.studentId = "الطالب مطلوب";
  }

  if (!data.dateTime) {
    errors.date = "تاريخ الجلسة مطلوب";
  }

  // -------------------------
  // Surah validation
  // -------------------------

// -------------------------
// Surahs validation
// -------------------------

if (!data.surahs || data.surahs.length === 0) {
  errors.surahs = "يجب اختيار سورة واحدة على الأقل";
} else {
  const invalidSurahs = data.surahs.filter(
    (surah) => !(surah in surahMap)
  );

  if (invalidSurahs.length > 0) {
    errors.surahs = "يوجد اسم سورة غير صحيح";
  }
}

  if (!data.grade?.trim()) {
    errors.grade = "التقييم مطلوب";
  }

  if (data.from === undefined || data.from === null) {
    errors.from = "بداية الآيات مطلوبة";
  }

  if (data.to === undefined || data.to === null) {
    errors.to = "نهاية الآيات مطلوبة";
  }

  // -------------------------
  // Number validation
  // -------------------------

  if (Number.isNaN(data.from)) {
    errors.from = "يجب إدخال رقم صحيح";
  }

  if (Number.isNaN(data.to)) {
    errors.to = "يجب إدخال رقم صحيح";
  }

  // -------------------------
  // Value validation
  // -------------------------



  if (
    typeof data.from === "number" &&
    typeof data.to === "number" &&
    data.from > data.to
  ) {
    errors.to = "يجب أن تكون نهاية الآيات أكبر من البداية";
  }

  return errors;
};