export const getMonthName = (
  date: Date | string,
  locale: "ar" | "en" = "ar"
) => {
  return new Intl.DateTimeFormat(
    locale === "ar" ? "ar-EG" : "en-US",
    {
      month: "long",
    }
  ).format(new Date(date));
};