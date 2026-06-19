export function hasMissingEnglishFields(session: Session) {
  return (
    !session.newEn ||
    !session.revisionEn ||
    !session.tajweedEn ||
    !session.notesEn
  );
}