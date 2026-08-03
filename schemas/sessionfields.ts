import { surahMap } from "@/translations/surahMap";
import { FormFieldSchema } from "@/types/appTypes";

export const sessionFields: FormFieldSchema[] = [
  {
    name: "studentId",
    label: "الطالب ",
    type: "select",
    source: "students",
  },
  {
    name: "date",
    label: "تاريخ الجلسة",
    type: "date",
  },
  {
    name: "surahs",
    label: "السورة ",
    type: "autocomplete",
  source: "surahs",

  },
  {
    name: "grade",
    label: "التقييم ",
    type: "select",
    data: [
      { name: "excellent", label: "ممتاز", value: "ممتاز" },

      { name: "veryGood", label: "جيد جدا", value: "جيد جدا" },
      { name: "good", label: "جيد", value: "جيد" },
      { name: "average", label: "متوسط", value: "متوسط" },
      { name: "accepted", label: "مقبول", value: "مقبول" },
      { name: "poor", label: "ضعيف", value: "ضعيف" },
    ],
  },
  { name: "from", label: "من اية ", type: "number" },
  { name: "to", label: "الى اية ", type: "number" },
  { name: "new", label: " الحفظ الجديد ", type: "text" },

  { name: "revision", label: " المراجعة ", type: "text" },
  { name: "tajweed", label: " احكام التجويد ", type: "text" },
  { name: "notes", label: " ملاحظات ", type: "textarea" },
];
