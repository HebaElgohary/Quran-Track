import { FormFieldSchema } from "@/types/appTypes";

  export const MonthlyReportsFields: FormFieldSchema[]  = [
    {
      name: "studentId",
      label: "الطالب",
      type: "select",
      source: "students",
    },
    {
      name: "month",
      label: "الشهر",
      type: "select",
      data: [
        { name: "january", label: "يناير", value: "يناير",checked: false },
        {name: "february", label: "فبراير", value: "فبراير" ,checked: false},
        { name: "march", label: "مارس", value: "مارس" ,checked: false},
        { name: "april", label: "ابريل", value: "ابريل",checked: false },
        {name: "may", label: "مايو", value: "مايو",checked: false },
        { name: "june", label: "يونيه", value: "يونيه",checked: false },
        {name: "july", label: "يوليو", value: "يوليو" ,checked: false},
        { name: "august", label: "اغسطس", value: "اغسطس",checked: false },
        { name: "september", label: "سبتمبر", value: "سبتمبر",checked: false },
        {name: "october", label: "اكتوبر", value: "اكتوبر",checked: false },
        {name: "november", label: "نوفمبر", value: "نوفمبر",checked: false },
        {name: "december", label: "ديسمبر", value: "ديسمبر" ,checked: false},
      ],
    },

    {
      name: "year",
      label: "السنة",
      type: "select",
      data: [
        { name: "2026", label: "2026", value: "2026",checked: false },
        { name : "2027", label: "2027", value: "2027" ,checked: false},
        {name: "2028", label: "2028", value: "2028" ,checked: false},
      ],
    },
  ];