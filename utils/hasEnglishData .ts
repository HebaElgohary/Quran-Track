import { Session } from "@/types/appTypes";

export const hasEnglishData = (session: Session) => {
  return (
    session.newEn?.trim() &&
    session.revisionEn?.trim() &&
    session.tajweedEn?.trim() &&
    session.notesEn?.trim()
  );
};