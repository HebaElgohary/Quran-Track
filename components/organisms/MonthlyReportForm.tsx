import { getFormFields } from "@/utils/getFormFields";
import React from "react";
import { View } from "react-native";
import FormField from "../molecules/form/FormField";
import Button from "../atoms/Button";

export default function MonthlyReportForm() {
  return (
    <View>
      <form
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent:'space-between',
          backgroundColor: "white",
          padding:12,
          overflow:'hidden',
          color:'red'
        }}
      >
        <View style={{display:'flex' ,width:'60%'}}>
        {getFormFields("MonthlyReports")?.map((field) => (
          <FormField key={field.label} {...field} />
        ))}
        </View>
        <Button size='lg' name='file-text'>{"عرض التقرير  "}</Button>
      </form>
    </View>
  );
}
