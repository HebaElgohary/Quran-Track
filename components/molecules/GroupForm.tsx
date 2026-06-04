import React from "react";
import {  View } from "react-native";
import FormHeading from "./form/FormHeading";
import Form from "./form/Form";
import { Group } from "@/types/appTypes";
import {useGroupForm} from "@/hooks/useGroupForm";

  
export default function GroupForm<T>({ handleSubmit, formData: group, setOpen, open }: { formData?: Group; handleSubmit?: (data: T)=>Promise<void>; setOpen: any; open: boolean }) {
  const {formData, setFormData} = useGroupForm(group);
  return (
    <View style= {{  backgroundColor: "white",
        padding: 16,
        borderRadius: 10,
        width:'100%',
        marginHorizontal:'auto',
        }}>
       {/* form heading */} 
  <FormHeading title='مجموعة  جديدة ' name={'x'} setOpen={setOpen} />
       {/* /////////////////// */}
      <Form<T>
        formData={formData}
        setFormData={setFormData}
       page='Groups'
        btn1={'اضافة'}
        btn2={"الغاء"} 
        setOpen={setOpen}
         handleSubmit={handleSubmit}/>
    
    </View>
  );
}
