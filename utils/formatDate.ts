export function formatDate(date: string, lang: "ar" | "en" = "ar") {
  const d = new Date(date);

  return new Intl.DateTimeFormat(lang === "en" ? "en-US" : "ar-EG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(d);
}
