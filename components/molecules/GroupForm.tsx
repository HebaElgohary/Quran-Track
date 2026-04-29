import { getFormFields } from "@/utils/getFormFields";
import React from "react";
import { Text, View } from "react-native";
import FormField from "../molecules/form/FormField";
import Button from "../atoms/Button";
import Title from "../atoms/Title";
import { colors } from "@/constants/theme";
import { Feather } from "@expo/vector-icons";
import FormHeading from "./form/FormHeading";
import Form from "./form/Form";

export default function GroupForm() {
  return (
    <View style={{backgroundColor:'white',padding:20}}>
       {/* form heading */} 
  <FormHeading title='مجموعة  جديدة ' name={'x'}/>
       {/* /////////////////// */}
      <Form page='Groups' btn1={"الغاء"} btn2={'اضافة'} />
    
    </View>
  );
}
