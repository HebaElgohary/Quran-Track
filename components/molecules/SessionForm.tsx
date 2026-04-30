import React from "react";
import {  View } from "react-native";
import FormHeading from "./form/FormHeading";
import Form from "./form/Form";


export default function SessionForm() {
  return (
    <View style={{backgroundColor:'white',padding:20}}>
       {/* form heading */} 
  <FormHeading title='تقرير حصة جديدة ' name={'x'}/>
       {/* /////////////////// */}
      <Form page='Session' btn1={"الغاء"} btn2={'اضافة'} />
    
    </View>
  );
}
