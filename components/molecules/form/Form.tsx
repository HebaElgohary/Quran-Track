import Button from "@/components/atoms/Button";
import { FormFieldSchema, FormName, Student,SourcesMap } from "@/types/appTypes";
import { formSchemas } from "@/utils/formSchemas";
import React, { useMemo } from "react";
import { ScrollView, View } from "react-native";
import FormField from "./FormField";
interface props<T> {
  page: FormName;
  btn1?: string;
  btn2?: string;
  setOpen: any;
  formData?: any;
  setFormData?: any;
  handleSubmit?: (data: T) => Promise<void>;
  errors?: any;
  data: Student[];
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
  console.log("formData in groupppppppppppppppppppp", data);
  const fields = useMemo(() => formSchemas[page], [page]);

  //------- source resolver-------//
  const sources: Partial<SourcesMap> = {
    students: data.map((student) => ({
      id: student.id,
      name: student.nameAr,
      value: student.id,
      checked: false,
    })),
  };
  //---------------------------//

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
          {fields.map((field:FormFieldSchema) => {
            const fieldProps = {
              ...field,
              data: field.source? sources[field.source] : field.data,
            };

            return (
              <FormField
                key={field.name}
                {...fieldProps}
                value={formData?.[field.name]}
                error={errors?.[field.name]}
                onChange={(value: string) =>
                  setFormData({
                    ...formData,
                    [field.name]: value,
                  })
                }
              />
            );
          })}
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
            onClick={() => {
              console.log("btttttttttttttnnnnnnnnnnnnnnnnn clicked");
              console.log(" daaaaaaata isssssssss ", formData);
              handleSubmit?.(formData);
              setOpen(false);
            }}
          >
            {formData?.id ? "تعديل" : btn1}{" "}
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
