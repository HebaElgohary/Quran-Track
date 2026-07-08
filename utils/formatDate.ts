export function formatDate(
  date: Date | string,
  lang: "ar" | "en" = "ar"
) {
  const d = date instanceof Date ? date : new Date(date);

  return new Intl.DateTimeFormat(
    lang === "en" ? "en-US" : "ar-EG",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  ).format(d);
}