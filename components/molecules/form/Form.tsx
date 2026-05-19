import Button from "@/components/atoms/Button";
import { getFormFields } from "@/utils/getFormFields";
import React,{useMemo} from "react";
import { View } from "react-native";
import FormField from "./FormField";
import { validateStudent } from "@/utils/validateStudent";
interface props<T> {
  page: "Students" | "Groups" | "Schedule" | "Session";
  btn1?: string;
  btn2?: string;
  setOpen: any;
  formData?: any;
  setFormData?: any;
  handleSubmit?: () => Promise<void>;
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
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
      }}
    >
      <View
        style={{ display: "flex", marginVertical: 14, padding: 12, gap: 10 }}
      >
        {fields?.map((field) => 
    { 
          console.log('form filds areeeeeeeeeeeee',field)

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
          onClick={handleSubmit}
        >
          {formData?.id? "تعديل" : btn1}{" "}
        </Button>

        <Button size="sm" textColor="white" onClick={() => setOpen(false)}>
          {" "}
          {btn2}
        </Button>
      </View>
    </View>
  );
}
