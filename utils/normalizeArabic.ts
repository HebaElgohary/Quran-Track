export function normalizeArabic(text: string) {
  return text
    .trim()
    .replace(/\s+/g, " ")
    .replace(/[ًٌٍَُِّْ]/g, ""); // remove tashkeel
}