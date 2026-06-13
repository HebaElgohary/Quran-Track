import { FormFieldSchema } from "@/types/appTypes";

export const scheduleFields: FormFieldSchema[] = [
    {
      name: "studentId",
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
      type: "date",
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
  name: "AmPm",
  label: "AM / PM",
  type: "select",
  data: [
    { id: 0, label: "AM", value: "AM" ,checked: false },
    {id: 1, label: "PM", value: "PM" ,checked: false },
  ],
},


    {
      name: "note",
      label: "ملاحظة ",
      type: "textarea",
    },
  ];