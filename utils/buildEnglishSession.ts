import { Session } from "@/types/appTypes";
import { gradeMap } from "../translations/sessionTranslation";
import { surahMap } from "../translations/surahMap";
import { normalizeArabic } from "./normalizeArabic";

export function buildEnglishSession(session: Session) {
    const normalizedSurah = normalizeArabic(session.surah);
        const normalizedRevision = normalizeArabic(session.revision);
        const normalizedTajweed = normalizeArabic(session.tajweed);
        const normalizedNotes = normalizeArabic(session.notes);

    const normalizedNew = normalizeArabic(session.new);

  return {
    ...session,

    grade: gradeMap[session.grade] ?? session.grade,

    surah: surahMap[normalizedSurah] ?? session.surah,

    new: surahMap[normalizedNew] ?? session.new,
    revision: surahMap[normalizedRevision] ?? session.revision,
    tajweed: session.tajweedEn ?? session.tajweed,
    notes: session.notesEn ?? session.notes,
  };
}