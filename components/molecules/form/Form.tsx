import Button from "@/components/atoms/Button";
import { getFormFields } from "@/utils/getFormFields";
import React,{useMemo} from "react";
import { ScrollView, View } from "react-native";
import FormField from "./FormField";
import { validateStudent } from "@/utils/validateStudent";
import { useFormData } from "@/hooks/useFormData";
import { FormName, Student } from "@/types/appTypes";
interface props<T> {
  page: FormName;
  btn1?: string;
  btn2?: string;
  setOpen: any;
  formData?: any;
  setFormData?: any;
  handleSubmit?: (data:T) => Promise<void>;
  errors?: any;
  data:Student[];
  setErrors?: any;
}



export default function Form<T>({
  handleSubmit,
  errors,
  formData,
  setFormData,
  page,
  btn1,
  data,
  btn2,
  setOpen,
}: props<T>) {
  console.log('formData in groupppppppppppppppppppp', data);
const fields = useMemo(() => getFormFields(page), [page]);

const fieldData = {
  data: data.map((item:Student) => ({
    id: item.id,
    name: item.nameAr,
    value: item.id,
    checked: false,
  })),
};

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
          {...fieldData}

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
