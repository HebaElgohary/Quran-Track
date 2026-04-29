import { getFormFields } from "@/utils/getFormFields";
import React from "react";
import { View } from "react-native";
import FormField from "../molecules/form/FormField";

export default function MonthlyReportForm() {
  return (
    <View>
      <form
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent:'space-between',
          backgroundColor: "white",
          padding:10,
          overflow:'hidden',
          color:'red'
        }}
      >
        {getFormFields("MonthlyReports")?.map((field) => (
          <FormField key={field.label} {...field} />
        ))}
      </form>
    </View>
  );
}
