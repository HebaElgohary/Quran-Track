import { colors } from "@/constants/theme";
import { FormData } from "@/types/appTypes";
export const getFormFields = (page: string,Data:FormData) => {
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
       students:
      Data?.map(item => ({
        id: item.id,
        name: item.nameAr,
        value: item.id,
        checked: false,
      })) || [],
    },
    {
      name: "notes",
      label: "ملاحظات ",
      type: "textarea",
    },
  ];

   const studentFields = [
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
      name: "level",
      label: "المستوى ",
      type: "select",
      data: [
        { id: 0, label: "مبتدئ",value:'مبتدئ', checked: false },
        { id: 1, label: "متوسط",value:'متوسط', checked: false },
        { id: 2, label: "متقدم", value:'متقدم', checked: false },
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
      name: "student",
      label: "الطالب",
      type: "select",
      data: [
        { label: "حكيم", value: "حكيم" },
        { label: "محمد", value: "محمد" },
        { label: "عزير", value: "عزير" },
      ],
    },
    {
      name: "month",
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
      name: "year",
      label: "السنة",
      type: "select",
      data: [
        { label: "2026", value: "2026" },
        { label: "2027", value: "2027" },
        { label: "2028", value: "2028" },
      ],
    },
  ];
  const scheduleFields = [
    {
      name: "student",
      label: "الطالب ",
      type: "select",
      data: [
        { label: "حكيم", value: "حكيم" },
        { label: "محمد", value: "محمد" },
        { label: "عزير", value: "عزير" },
      ],
    },
    {
      name: "time",
      label: "الموعد",
      type: "text",
    },
    {
      name: "duration",
      label: "المدة ",
      type: "text",
    },
    {
      name: "note",
      label: "ملاحظة ",
      type: "textarea",
    },
  ];

  const sessionFields = [
    {
      name: "student",
      label: "الطالب ",
      type: "select",
      data: [
        { label: "حكيم", value: "حكيم" },
        { label: "محمد", value: "محمد" },
        { label: "عزير", value: "عزير" },
      ],
    },
    {
      name: "time",
      label: "الموعد",
      type: "text",
    },
    {
      name: "surah",
      label: "السورة ",
      type: "text",
    },
    {
      name: "grade",
      label: "التقييم ",
      type: "select",
      data: [
        { label: "مقبول", value: "مقبول" },
        { label: "جيد", value: "جيد" },
        { label: "جيد جدا", value: "جيد جدا" },
        { label: "ممتاز", value: "ممتاز" },
      ],
    },
    { name: "from", label: "من اية ", type: "number" },
    { name: "to", label: "الى اية ", type: "number" },
    ,
    { name: "new", label: " الحفظ الجديد ", type: "text" },

    { name: "revision", label: " المراجعة ", type: "text" },
    { name: "tajweed", label: " احكام التجويد ", type: "text" },
    { name: "notes", label: " ملاحظات ", type: "textarea" },
  
  ];

  switch (page) {
    case "Groups":
      return groupFields;

    case "MonthlyReports":
      return MonthlyReportsFields;
    case "Schedule":
      return scheduleFields;
    case "Session":
      return sessionFields;
         case "Students":
      return studentFields;
  
  }
};
