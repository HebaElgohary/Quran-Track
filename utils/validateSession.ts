import { Session, SessionFormData } from "@/types/appTypes";

export const validateSession = (
  data: Session | SessionFormData
) => {
  const errors: Record<string, string> = {};

  // Required fields
  if (!data.studentId) {
    errors.studentId = "الطالب مطلوب";
  }

  if (!data.dateTime) {
    errors.date = "تاريخ الجلسة مطلوب";
  }

  if (!data.surah?.trim()) {
    errors.surah = "السورة مطلوبة";
  }

  if (!data.grade?.trim()) {
    errors.grade = "التقييم مطلوب";
  }

  if (
    data.from === undefined ||
    data.from === null ||
    data.from === 0
  ) {
    errors.from = "بداية الآيات مطلوبة";
  }

  if (
    data.to === undefined ||
    data.to === null ||
    data.to === 0
  ) {
    errors.to = "نهاية الآيات مطلوبة";
  }

  // Validation Rules
  if (
    typeof data.from === "number" &&
    typeof data.to === "number" &&
    data.from > data.to
  ) {
    errors.to = "يجب أن تكون نهاية الآيات أكبر من البداية";
  }

  if (
    typeof data.from === "number" &&
    data.from < 1
  ) {
    errors.from = "رقم الآية يجب أن يكون أكبر من صفر";
  }

  if (
    typeof data.to === "number" &&
    data.to < 1
  ) {
    errors.to = "رقم الآية يجب أن يكون أكبر من صفر";
  }

  return errors;
};