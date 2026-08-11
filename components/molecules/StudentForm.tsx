import { useStudentForm } from "@/hooks/useStudentForm";
import React from "react";
import { useWindowDimensions, View } from "react-native";
import Form from "./form/Form";
import FormHeading from "./form/FormHeading";
import { Student, StudentFormData } from "@/types/appTypes";

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

    const {width,height}=useWindowDimensions()
    const formHeight = Math.min(height * 0.85, 700);
  const onSubmit = async () => {
    const isValid = validate();
    if (!isValid) return;

    await handleSubmit?.(formData as T);
    reset();
    setOpen(false);
  };

  return (
      <View style={{backgroundColor:'white',padding:12,borderRadius:10,height:formHeight,width:width-44}}>
      <FormHeading name="x" title="اضافة طالب" setOpen={setOpen} />

      <Form<StudentFormData>
        formData={formData}
        errors={errors}
        setFormData={setFormData}
        handleSubmit={onSubmit}
        page="Students"
        setOpen={setOpen}
      />
    </View>
  );
}
