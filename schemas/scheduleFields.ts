import { FormFieldSchema } from "@/types/appTypes";

export const scheduleFields: FormFieldSchema[] = [
    {
      name: "studentId",
      label: "الطالب ",
      type: "select",
      source: "students",
    },
    {
      name: "dateTime",
      label: "التاريخ ",
      type: "date",
    },
        {
      name: "dateTime",
      label: "الوقت ",
      type: "time",
    },
    {
      name: "duration",
      label: "المدة ",
      type: "number",
    },
    {
      name: "notes",
      label: "ملاحظة ",
      type: "textarea",
    },
  ];