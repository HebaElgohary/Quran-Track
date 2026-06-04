import Button from "@/components/atoms/Button";
import { getFormFields } from "@/utils/getFormFields";
import React,{useMemo} from "react";
import { ScrollView, View } from "react-native";
import FormField from "./FormField";
import { validateStudent } from "@/utils/validateStudent";
interface props<T> {
  page: "Students" | "Groups" | "Schedule" | "Session";
  btn1?: string;
  btn2?: string;
  setOpen: any;
  formData?: any;
  setFormData?: any;
  handleSubmit?: (data:T) => Promise<void>;
  errors?: any;
  setErrors?: any;
}


export default function Form<T>({
  handleSubmit,
  errors,
  formData,
  setFormData,
  page,
  btn1,
  btn2,
  setOpen,
}: props<T>) {
const fields = useMemo(() => getFormFields(page), [page]);

  console.log('formData in group', formData);


  return (
    <ScrollView
  style={{ maxHeight: 500 }}
  contentContainerStyle={{
    paddingBottom: 20,
  }}
>
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        maxHeight: 500,
        // overflowY: "scroll",
      }}
    >
      <View
        style={{ display: "flex", marginVertical: 14, padding: 12, gap: 10 }}
      >
        {fields?.map((field) => 
    { 

           return <FormField
            value={formData?.[field?.name as keyof typeof formData]}
           error={errors?.[field?.name as keyof typeof errors]}
            onChange={(value: any) =>

              setFormData({
                ...formData,
                [field?.name as keyof typeof formData]: value,
              })
            }
            key={field?.label}
            {...field}
          />
 } 
        
        )}
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          gap: 5,
        }}
      >
        <Button
          size="sm"
          variant="gray"
          textColor="black"
          onClick={() =>{
            console.log('btttttttttttttnnnnnnnnnnnnnnnnn clicked')
            console.log(' daaaaaaata isssssssss ',formData);
            handleSubmit?.(formData)
            setOpen(false)
          }
          }
        >
          {formData?.id? "تعديل" : btn1}{" "}
        </Button>

        <Button size="sm" textColor="white" onClick={() => setOpen(false)}>
          {" "}
          {btn2}
        </Button>
      </View>
    </View>
    </ScrollView>
  );
}
