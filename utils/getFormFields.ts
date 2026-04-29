import { colors } from "@/constants/theme";

export const getFormFields = (page: string) => {
  const groupFields = [
    {
      name: "nameAr",
      label: "الاسم بالعربية",
      type: "text",
    },
    {
      name: "nameEn",
      label: "الاسم بالانجليزية",
      type: "text",
    },
    {
      name: "color",
      label: "اللون ",
      type: "radio",
      data: [
        { color: colors.btnPrimary, id: 0, checked: false },
        { color: colors.secondary, id: 1, checked: false },
        { color: colors.warning, id: 2, checked: false },
        { color: colors.danger, id: 3, checked: false },
      ],
    },
    {
      name: "students",
      label: "الطلاب ",
      type: "checkbox",
      data: [
        { id: 0, name: "hakim", checked: false },
        { id: 1, name: "zakeria", checked: false },
        { id: 2, name: "uzair", checked: false },
      ],
    },
    {
      name: "notes",
      label: "ملاحظات ",
      type: "textarea",
    },
  ];
  const MonthlyReportsFields = [
    {
      label: "الطالب",
      type: "select",
      data: [
        { label: "حكيم", value: "حكيم" },
        { label: "محمد", value: "محمد" },
        { label: "عزير", value: "عزير" },
      ],
    },
    {
      label: "الشهر",
      type: "select",
      data: [
        { label: "يناير", value: "يناير" },
        { label: "فبراير", value: "فبراير" },
        { label: "مارس", value: "مارس" },
        { label: "ابريل", value: "ابريل" },
        { label: "مايو", value: "مايو" },
        { label: "يونيه", value: "يونيه" },
        { label: "يوليو", value: "يوليو" },
        { label: "اغسطس", value: "اغسطس" },
        { label: "سبتمبر", value: "سبتمبر" },
        { label: "اكتوبر", value: "اكتوبر" },
        { label: "نوفمبر", value: "نوفمبر" },
        { label: "ديسمبر", value: "ديسمبر" },
      ],
    },
    
        {
      label: "السنة",
      type: "select",
      data: [
        { label: "2026", value: "2026" },
        { label: "2027", value: "2027" },
        { label: "2028", value: "2028" },
      ],
    },
  ];

  switch (page) {
    case "Groups":
      return groupFields;
      
       case "MonthlyReports":
      return MonthlyReportsFields;
  }
};
