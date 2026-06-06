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
  },
  {
    name: "notes",
    label: "ملاحظات",
    type: "textarea",
  },
];