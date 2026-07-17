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

  const surah = data.surah?.trim().replace(/\s+/g, " ");

  if (!surah) {
    errors.surah = "السورة مطلوبة";
  } else if (!(surah in surahMap)) {
    errors.surah = "يرجى اختيار اسم سورة صحيح";
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

  if (typeof data.from === "number" && data.from < 1) {
    errors.from = "رقم الآية يجب أن يكون أكبر من صفر";
  }

  if (typeof data.to === "number" && data.to < 1) {
    errors.to = "رقم الآية يجب أن يكون أكبر من صفر";
  }

  if (
    typeof data.from === "number" &&
    typeof data.to === "number" &&
    data.from > data.to
  ) {
    errors.to = "يجب أن تكون نهاية الآيات أكبر من البداية";
  }

  return errors;
};