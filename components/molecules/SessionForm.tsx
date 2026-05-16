import React from "react";
import {  View } from "react-native";
import FormHeading from "./form/FormHeading";
import Form from "./form/Form";


export default function SessionForm<T>( { handleSubmit, setOpen, open }: {handleSubmit?:T; setOpen: any; open: boolean }) {
  return (
    <View style={{backgroundColor:'white',padding:20,overflow:'scroll',maxHeight:'85%',borderRadius:10}}>
       {/* form heading */} 
  <FormHeading title='تقرير حصة جديدة ' name={'x'} setOpen={setOpen} />
       {/* /////////////////// */}
      <Form handleSubmit={handleSubmit} page='Session' btn1={"الغاء"} btn2={'اضافة'} setOpen={setOpen} />
    
    </View>
  );
}
