import { getFormFields } from "@/utils/getFormFields";
import React from "react";
import { View } from "react-native";
import FormField from "../molecules/form/FormField";
import Button from "../atoms/Button";

import FormHeading from "./form/FormHeading";
import Form from "./form/Form";

export default function ScheduleForm<T>({handleSubmit, setOpen, open }: {handleSubmit?: T; setOpen: any; open: boolean }) {
  return (
    <View style={{backgroundColor:'white',padding:12,borderRadius:10}}>
       {/* form heading */} 
  <FormHeading title='موعد حصة جديدة ' name={'x'} setOpen={setOpen} />
       {/* /////////////////// */}
<Form handleSubmit={handleSubmit} page='Schedule' btn1={"الغاء"} btn2={'اضافة'} setOpen={setOpen} />
      
    </View>
  );
}
