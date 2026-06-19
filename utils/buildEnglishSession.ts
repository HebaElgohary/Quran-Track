import { Session } from "@/types/appTypes";
import { gradeMap } from "../translations/sessionTranslation";
import { surahMap } from "../translations/surahMap";

export function buildEnglishSession(session: Session) {
  return {
    ...session,

    grade: gradeMap[session.grade] ?? session.grade,

    surah: surahMap[session.surah] ?? session.surah,

    new: session.newEn ?? session.new,
    revision: session.revisionEn ?? session.revision,
    tajweed: session.tajweedEn ?? session.tajweed,
    notes: session.notesEn ?? session.notes,
  };
}