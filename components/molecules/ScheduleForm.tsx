import { getFormFields } from "@/utils/getFormFields";
import React from "react";
import { View } from "react-native";
import FormField from "../molecules/form/FormField";
import Button from "../atoms/Button";

import FormHeading from "./form/FormHeading";

export default function ScheduleForm({ setOpen, open }: { setOpen: any; open: boolean }) {
  return (
    <View style={{backgroundColor:'white',padding:12}}>
       {/* form heading */} 
  <FormHeading title='موعد حصة جديدة ' name={'x'} setOpen={setOpen} />
       {/* /////////////////// */}
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent:'space-between',
          overflow:'hidden',
          color:'red'
        }}
      >
        <View style={{display:'flex' ,width:'80%',marginVertical:14}}>
        {getFormFields("Schedule")?.map((field) => (
          <FormField key={field?.label} {...field} />
        ))}
        </View>
        <View style={{display:'flex', flexDirection:'row',justifyContent:'flex-end',gap:5}}>
        <Button size='md' variant="gray"  textColor="black" >{"الغاء"}</Button>
       
        <Button size='md' textColor="white">{"اضافة"}</Button>
      </View>
      </form>
    </View>
  );
}
