import { Student } from "@/types/student";
import React, { useState } from "react";
import { View } from "react-native";
import Form from "./form/Form";
import FormHeading from "./form/FormHeading";

export default function StudentForm<T>({
  formData: student,
  setOpen,
  open,
  handleSubmit,
}: {
  formData?: Student;
  setOpen: any;
  open: boolean;
  handleSubmit?: T;
}) {
  const [formData, setFormData] = useState(
    student || { nameAr: "", nameEn: "", level: "مبتدئ", notes: "" },
  );
  const [errors, setErrors] = useState<any>({});
  return (
    <View
      style={{
        backgroundColor: "white",
        padding: 16,
        borderRadius: 10,
      }}
    >
      {/* Header */}
      <FormHeading title="اضافة طالب جديد" name={"x"} setOpen={setOpen} />

      {/* Form Content */}
      <Form
        formData={formData}
        errors={errors}
        setErrors={setErrors}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        page="Students"
        btn1="اضافة"
        btn2="الغاء"
        setOpen={setOpen}
      />
    </View>
  );
}
