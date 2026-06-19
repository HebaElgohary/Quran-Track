import { FormFieldSchema } from "@/types/appTypes";

export const teacherFields: FormFieldSchema[]=[
    {
      name: 'name',
      label: 'Name',
      type: 'text',
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
    },
]