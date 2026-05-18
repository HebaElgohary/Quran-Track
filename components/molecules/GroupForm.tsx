import React from "react";
import {  View } from "react-native";
import FormHeading from "./form/FormHeading";
import Form from "./form/Form";

export default function GroupForm<T>({handleSubmit, setOpen, open }: {handleSubmit?: (data: T)=>Promise<void>; setOpen: any; open: boolean }) {
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
      <Form<T> page='Groups' btn1={"الغاء"} btn2={'اضافة'} setOpen={setOpen} handleSubmit={handleSubmit}/>
    
    </View>
  );
}
