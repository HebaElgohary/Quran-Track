// import { MonthlyReportsFormData, Session } from "@/types/appTypes";
// import { gradeMap } from "../translations/sessionTranslation";
// import { surahMap } from "../translations/surahMap";
// import { normalizeArabic } from "./normalizeArabic";

// export function buildEnglishReport(report: MonthlyReportsFormData) {
//     const normalizedSurah = normalizeArabic(session.surah);
//     const normalizedNew = normalizeArabic(session.new);

//   return {
//     ...session,

//     grade: gradeMap[session.grade] ?? session.grade,

//     surah: surahMap[normalizedSurah] ?? session.surah,

//     new: surahMap[normalizedNew] ?? session.new,
//     revision: session.revisionEn ?? session.revision,
//     tajweed: session.tajweedEn ?? session.tajweed,
//     notes: session.notesEn ?? session.notes,
//   };
// }