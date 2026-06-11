import { FormFieldSchema } from "@/types/appTypes";

export const scheduleFields: FormFieldSchema[] = [
    {
      name: "student",
      label: "الطالب ",
      type: "select",
      // data: [
      //   { name: "hakim", label: "حكيم", value: "حكيم" },
      //   {name: "mohamed", label: "محمد", value: "محمد" },
      //   {name: "Uzair", label: "عزير", value: "عزير" },
      // ],
      source: "students",
    },
    {
      name: "date",
      label: "الموعد",
      type: "text",
    },
        {
      name: "time",
      label: "الساعة",
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