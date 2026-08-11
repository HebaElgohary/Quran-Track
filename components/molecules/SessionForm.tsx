import React from "react";
import { View,useWindowDimensions } from "react-native";
import Form from "./form/Form";
import FormHeading from "./form/FormHeading";
import { useSessionForm } from "@/hooks/useSessionForm";
import { Session, SessionFormData, SourcesMap } from "@/types/appTypes";
import { useStudents } from "@/hooks/useStudent";

export default function SessionForm<T>({
  handleSubmit,
  setOpen,
  open,
  formData:session,
}: {
  handleSubmit?: (data: T) => Promise<void>;
  setOpen: any;
  open: boolean;
  formData?: T;
}) {
const { formData, setFormData, errors, reset, validate } =  useSessionForm(session as Session)
const {width,height}=useWindowDimensions()
const formHeight = Math.min(height * 0.85, 700);

const { students } = useStudents();
  //------- source resolver-------//
  const sources: Partial<SourcesMap> = {
    students: (students ?? []).map((student) => ({
      id: student.id,
      name: student.nameEn,
      value: student.id,
      label: student.nameAr,
      checked: false,
    })),
  };

  //---------------------------//
    const onSubmit = async () => {
     const isValid = validate();
    if (!isValid) return;
  console.log('formData before submit', formData);

    await handleSubmit?.(formData as T);
    reset();
    setOpen(false);
  
  }
  return (
      <View style={{backgroundColor:'white',padding:12,borderRadius:10,height:formHeight,width:width-44}}>

      {/* form heading */}
      <FormHeading title="تقرير حصة جديدة " name={"x"} setOpen={setOpen} />
      {/* /////////////////// */}
      <Form<SessionFormData>
        handleSubmit={onSubmit}
        formData={formData}
        setFormData={setFormData}
        page="Sessions"
     
        setOpen={setOpen}
        errors={errors}
        sources={sources}
        
      />
    </View>
  );
}
