import React from "react";
import { View } from "react-native";
import FormHeading from "./form/FormHeading";
import Form from "./form/Form";
import { useScheduleForm } from "@/hooks/useScheduleForm";
import { Schedule, SourcesMap } from "@/types/appTypes";
import { useStudents } from "@/hooks/useStudent";
export default function ScheduleForm<T>({handleSubmit, setOpen, open,formData:schedule }: {handleSubmit?: (data: T) => Promise<void>;formData?: T; setOpen: any; open: boolean }) {
 const { formData, setFormData, errors, reset } =  useScheduleForm(schedule as Schedule)
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

    const onSubmit = async () => {
    //  const isValid = validate();
    // if (!isValid) return;
  console.log('formData before submit', formData);

    await handleSubmit?.(formData as T);
    reset();
    setOpen(false);
  
  }
 
  return (
    <View style={{backgroundColor:'white',padding:12,borderRadius:10}}>
       {/* form heading */} 
  <FormHeading title='موعد حصة جديدة ' name={'x'} setOpen={setOpen} />
       {/* /////////////////// */}
<Form<T>
 handleSubmit={onSubmit}
  formData={formData}
  errors={errors}
  setFormData={setFormData}
  sources={sources}
  page='Schedule'
   setOpen={setOpen}
    />
      
    </View>
  );
}
