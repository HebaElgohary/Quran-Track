import { getFormFields } from "@/utils/getFormFields";
import React from "react";
import { View } from "react-native";
import FormField from "../molecules/form/FormField";
import Button from "../atoms/Button";

export default function MonthlyReportForm() {
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent:'space-between',
          backgroundColor: "white",
          padding:12,
          overflow:'hidden',
          // alignItems:'flex-start'

        }}
      >
        <View style={{display:'flex' ,flexDirection:'column',alignItems:'flex-start'}}>
        {getFormFields("MonthlyReports")?.map((field) => (
          <FormField key={field?.label} {...field} />
        ))}
        </View>
        <View style={{display:'flex', flexDirection:'row',justifyContent:'flex-end',marginVertical:15}}>
        <Button size='lg' name='file-text' >{"عرض التقرير  "}</Button>
     </View>
      </View>
    </View>
  );
}
