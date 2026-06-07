import { useStudentForm } from "@/hooks/useStudentForm";
import React from "react";
import { View } from "react-native";
import Form from "./form/Form";
import FormHeading from "./form/FormHeading";
import { Student } from "@/types/appTypes";

export default function StudentForm<T>({
  setOpen,
  handleSubmit,
  formData: student,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  formData?: T;
  handleSubmit?: (data: T) => Promise<void>;
}) {
  let { formData, setFormData, errors, validate, reset } =
    useStudentForm(student as Student) ;

  const onSubmit = async () => {
    const isValid = validate();
    if (!isValid) return;

    await handleSubmit?.(formData as T);
    reset();
    setOpen(false);
  };

  return (
    <View style={{ backgroundColor: "white", padding: 16, borderRadius: 10 }}>
      <FormHeading name="x" title="اضافة طالب" setOpen={setOpen} />

      <Form<T>
        formData={formData}
        errors={errors}
        setFormData={setFormData}
        handleSubmit={onSubmit}
        page="Students"
        btn1="اضافة"
        btn2="الغاء"
        setOpen={setOpen}
      />
    </View>
  );
}
