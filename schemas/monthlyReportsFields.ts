import { FormFieldSchema } from "@/types/appTypes";

  export const MonthlyReportsFields: FormFieldSchema[]  = [
    {
      name: "student",
      label: "الطالب",
      type: "select",

    source: "students",
    },
    {
      name: "month",
      label: "الشهر",
      type: "select",
      data: [
        { name: "january", label: "يناير", value: "يناير" },
        {name: "february", label: "فبراير", value: "فبراير" },
        { name: "march", label: "مارس", value: "مارس" },
        { name: "april", label: "ابريل", value: "ابريل" },
        {name: "may", label: "مايو", value: "مايو" },
        { name: "june", label: "يونيه", value: "يونيه" },
        {name: "july", label: "يوليو", value: "يوليو" },
        { name: "august", label: "اغسطس", value: "اغسطس" },
        { name: "september", label: "سبتمبر", value: "سبتمبر" },
        {name: "october", label: "اكتوبر", value: "اكتوبر" },
        {name: "november", label: "نوفمبر", value: "نوفمبر" },
        {name: "december", label: "ديسمبر", value: "ديسمبر" },
      ],
    },

    {
      name: "year",
      label: "السنة",
      type: "select",
      data: [
        { name: "2026", label: "2026", value: "2026" },
        { name : "2027", label: "2027", value: "2027" },
        {name: "2028", label: "2028", value: "2028" },
      ],
    },
  ];