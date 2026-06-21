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
        { name: "june", label: "يونيو", value: "يونيو",checked: false },
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
        {name: "2029", label: "2029", value: "2029" ,checked: false},
        {name: "2030", label: "2030", value: "2030" ,checked: false},
        {name: "2031", label: "2031", value: "2031" ,checked: false},
        {name: "2032", label: "2032", value: "2032" ,checked: false},
        {name: "2033", label: "2033", value: "2033" ,checked: false},
        {name: "2034", label: "2034", value: "2034" ,checked: false},
        {name: "2035", label: "2035", value: "2035" ,checked: false},
        {name: "2036", label: "2036", value: "2036" ,checked: false},
        {name: "2037", label: "2037", value: "2037" ,checked: false},
        {name: "2038", label: "2038", value: "2038" ,checked: false},
        {name: "2039", label: "2039", value: "2039" ,checked: false},

      ],
    },
  ];