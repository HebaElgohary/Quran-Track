export const getMonthYear = (
  date: Date | string,
  locale: "ar" | "en" = "ar"
) => {
  return new Intl.DateTimeFormat(
    locale === "ar" ? "ar-EG" : "en-US",
    {
      month: "long",
      year: "numeric",
    }
  ).format(new Date(date));
};