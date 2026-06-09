import { FormFieldSchema } from "@/types/appTypes";

export const sessionFields: FormFieldSchema[] = [
    {
      name: "student",
      label: "الطالب ",
      type: "select",
      // data: [
      //   { name: "hakim", label: "حكيم", value: "حكيم" },
      //   {name: "mohamed", label: "محمد", value: "محمد" },
      //   { name  : "Uzair", label: "عزير", value: "عزير" },
      // ],
     source: "students",

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
        { name: "accepted", label: "مقبول", value: "مقبول" },
        {name: "good", label: "جيد", value: "جيد" },
        {name : "average", label: "متوسط", value: "متوسط" },
        {name : "poor", label: "ضعيف", value: "ضعيف" },
        {name : "veryGood", label: "جيد جدا", value: "جيد جدا" },
        {name : "excellent", label: "ممتاز", value: "ممتاز" },
      ],
    },
    { name: "from", label: "من اية ", type: "number" },
    { name: "to", label: "الى اية ", type: "number" },
    { name: "new", label: " الحفظ الجديد ", type: "text" },

    { name: "revision", label: " المراجعة ", type: "text" },
    { name: "tajweed", label: " احكام التجويد ", type: "text" },
    { name: "notes", label: " ملاحظات ", type: "textarea" },
  
  ];
