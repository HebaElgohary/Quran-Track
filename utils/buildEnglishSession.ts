import { Session } from "@/types/appTypes";
import { gradeMap } from "../translations/sessionTranslation";
import { surahMap } from "../translations/surahMap";
import { normalizeArabic } from "./normalizeArabic";

export function buildEnglishSession(session: Session) {
  const normalizedSurahs = session.surahs.map(normalizeArabic);
  const normalizedNew = normalizeArabic(session.new);
  const normalizedRevision = normalizeArabic(session.revision);

  return {
    ...session,

    grade: gradeMap[session.grade] ?? session.grade,

    surahs: normalizedSurahs.map(
      (surah, index) => surahMap[surah] ?? session.surahs[index]
    ),

    new: surahMap[normalizedNew] ?? session.newEn ?? session.new,

    revision:
      surahMap[normalizedRevision] ??
      session.revisionEn ??
      session.revision,

    tajweed: session.tajweedEn ?? session.tajweed,

    notes: session.notesEn ?? session.notes,
  };
}