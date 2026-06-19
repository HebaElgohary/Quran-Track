import { FormFieldSchema } from "@/types/appTypes";

export const teacherFields: FormFieldSchema[]=[
    {
      name: 'nameAr',
      label: 'Arabic Name',
      type: 'text',
    },
      {
      name: 'nameEn',
      label: 'EnglishName',
      type: 'text',
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
    },
]