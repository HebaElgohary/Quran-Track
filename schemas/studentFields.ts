import { FormFieldSchema } from "@/types/appTypes";

export const studentFields: FormFieldSchema[] = [
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
    label: "المستوى",
    type: "select",
      data: [
        { id: 0, label: "مبتدئ",value:'مبتدئ', checked: false },
        { id: 1, label: "متوسط",value:'متوسط', checked: false },
        { id: 2, label: "متقدم", value:'متقدم', checked: false },
      ],
  },
  {
    name: "notes",
    label: "ملاحظات",
    type: "textarea",
  },
];