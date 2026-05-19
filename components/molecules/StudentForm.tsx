import React from "react";
import { View } from "react-native";
import Form from "./form/Form";
import FormHeading from "./form/FormHeading";
import { useStudentForm } from "@/hooks/useStudentForm";

export default function StudentForm({
  setOpen,
  handleSubmit,
  formData: student,
}: any) {
  const {
    formData,
    setFormData,
    errors,
    validate,
    reset,
  } = useStudentForm(student);

  const onSubmit = async () => {
    const isValid = validate();
    if (!isValid) return;

    await handleSubmit?.(formData);
    reset();
    setOpen(false);
  };

  return (
    <View style={{ backgroundColor: "white", padding: 16, borderRadius: 10 }}>
      <FormHeading name="x" title="اضافة طالب" setOpen={setOpen} />

      <Form
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