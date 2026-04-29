import { getFormFields } from "@/utils/getFormFields";
import React from "react";
import { Text, View } from "react-native";
import FormField from "../molecules/form/FormField";
import Button from "../atoms/Button";
import Title from "../atoms/Title";
import { colors } from "@/constants/theme";
import { Feather } from "@expo/vector-icons";
import FormHeading from "./form/FormHeading";

export default function GroupForm() {
  return (
    <View style={{backgroundColor:'white',padding:20}}>
       {/* form heading */} 
  <FormHeading title='مجموعة  جديدة ' name={'x'}/>
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
        <View style={{display:'flex' ,width:'80%',marginVertical:14,gap:10}}>
        {getFormFields("Groups")?.map((field) => (
          <FormField key={field.label} {...field} />
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
