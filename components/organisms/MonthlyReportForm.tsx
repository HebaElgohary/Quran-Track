import { getFormFields } from "@/utils/getFormFields";
import React from "react";
import { View } from "react-native";
import FormField from "../molecules/form/FormField";
import Button from "../atoms/Button";
import { MonthlyReportsFields } from "@/schemas/monthlyReportsFields";
import { useStudents } from "@/hooks/useStudent";
import { FormFieldSchema, SourcesMap } from "@/types/appTypes";


export default function MonthlyReportForm<T>({
  handleSubmit,
}: {
  handleSubmit: (data: T) => Promise<void>;}
) {

  const { students } = useStudents();
    //------- source resolver-------//
    const sources: Partial<SourcesMap> = {
      students: (students ?? []).map((student) => ({
        id: student.id,
        name: student.nameEn,
        value: student.id,
        label: student.nameAr,
        checked: false,
      })),
    };
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
        <View style={{ gap: 14 }}>
                 {MonthlyReportsFields.map((field: FormFieldSchema) =>
                  {
                   const fieldError = errors?.[field.name];
       
                   const fieldProps = {
                     ...field,
                     data: field.source ? sources?.[field.source] : field.data,
                   };
       
                   return (
                     <View key={field.name}>
                       {/* FIELD CONTAINER */}
                       <View
                         style={{
                           backgroundColor: "#FAFAFA",
                           borderRadius: 16,
                           padding: 12,
                           borderWidth: fieldError ? 1.5 : 1,
                           borderColor: fieldError ? "#EF4444" : "#E5E7EB",
                         }}
                       >
                         <FormField
                           {...fieldProps}
                           value={formData?.[field.name as keyof T]}
                           error={fieldError}
                           onChange={(value: unknown) =>
                             setFormData((prev) => ({
                               ...prev,
                               [field.name]: value,
                             }))
                           }
                         />
                       </View>
       
                       {/* ERROR TEXT */}
                       {fieldError && (
                         <Text
                           style={{
                             color: "#EF4444",
                             fontSize: 12,
                             marginTop: 4,
                             marginLeft: 6,
                           }}
                         >
                           {fieldError}
                         </Text>
                       )}
                     </View>
                   );
                 })}
               </View>
        <View style={{display:'flex', flexDirection:'row',justifyContent:'flex-end',marginVertical:15}}>
        <Button size='lg' name='file-text' onClick={()=>handleSubmit()} >{"عرض التقرير  "}</Button>
     </View>
      </View>
    </View>
  );
}
