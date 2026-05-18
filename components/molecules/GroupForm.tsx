import React, { useState } from "react";
import {  View } from "react-native";
import FormHeading from "./form/FormHeading";
import Form from "./form/Form";
import { Group, GroupFormData } from "@/types/appTypes";

  
export default function GroupForm<T>({ handleSubmit, formData: group, setOpen, open }: { formData?: Group; handleSubmit?: (data: T)=>Promise<void>; setOpen: any; open: boolean }) {
  const [formData, setFormData] = useState(
     group || {} as GroupFormData,
   );
  return (
    <View style= {{  backgroundColor: "white",
        padding: 16,
        borderRadius: 10,
        width:'100%',
        marginHorizontal:'auto'
        }}>
       {/* form heading */} 
  <FormHeading title='مجموعة  جديدة ' name={'x'} setOpen={setOpen} />
       {/* /////////////////// */}
      <Form<T>
        formData={formData}
        setFormData={setFormData}
       page='Groups'
        btn1={"الغاء"} 
        btn2={'اضافة'} 
        setOpen={setOpen}
         handleSubmit={handleSubmit}/>
    
    </View>
  );
}
