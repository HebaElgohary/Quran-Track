import { colors } from "@/constants/theme";
import { FormFieldSchema } from "@/types/appTypes";

 export const groupFields: FormFieldSchema[] = [
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
        { color: colors.orange, id: 0, checked: false },
        { color: colors.secondary, id: 1, checked: false },
        { color: colors.pink, id: 2, checked: false },
        { color: colors.danger, id: 3, checked: false },
        { color: colors.violet, id: 4, checked: false },

      ],
    },
    {
      name: "students",
      label: "الطلاب ",
      type: "checkbox",
     source: "students",
    },
    {
      name: "notes",
      label: "ملاحظات ",
      type: "textarea",
    },
  ];