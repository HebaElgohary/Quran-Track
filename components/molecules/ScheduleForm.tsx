import { getFormFields } from "@/utils/getFormFields";
import React from "react";
import { View } from "react-native";


import FormHeading from "./form/FormHeading";
import Form from "./form/Form";

export default function ScheduleForm<T>({handleSubmit, setOpen, open }: {handleSubmit?: (data: T) => Promise<void>; setOpen: any; open: boolean }) {
 const { formData, setFormData, errors, reset, validate } =  useScehduleForm(session as Session)
 
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
 
  return (
    <View style={{backgroundColor:'white',padding:12,borderRadius:10}}>
       {/* form heading */} 
  <FormHeading title='موعد حصة جديدة ' name={'x'} setOpen={setOpen} />
       {/* /////////////////// */}
<Form<T>
 handleSubmit={handleSubmit}
  page='Schedule'
   setOpen={setOpen}
    />
      
    </View>
  );
}
