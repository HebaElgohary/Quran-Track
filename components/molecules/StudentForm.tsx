import { Student, StudentFormData } from "@/types/appTypes";
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
  handleSubmit?: (data: T) => Promise<void>;
}) {
  const [formData, setFormData] = useState(
    student || {} as StudentFormData,
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
      <Form<T>
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
