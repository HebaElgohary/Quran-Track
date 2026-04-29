import { getFormFields } from "@/utils/getFormFields";
import React from "react";
import { Text, View } from "react-native";
import FormField from "../molecules/form/FormField";
import Button from "../atoms/Button";
import Title from "../atoms/Title";
import { colors } from "@/constants/theme";
import { Feather } from "@expo/vector-icons";

export default function ScheduleForm() {
  return (
    <View style={{backgroundColor:'white',padding:15}}>
       {/* form heading */}
       <View style={{display:'flex',flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
        <Text style={{textAlign:'left' ,fontSize:20,color:colors.btnPrimary}}>موعد حصة جديدة </Text>
       <Feather name='x' size={20}/>
       </View>
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
