import Button from "@/components/atoms/Button";
import { FormFieldSchema, FormName, SourcesMap } from "@/types/appTypes";
import { formSchemas } from "@/utils/formSchemas";
import React, { useMemo } from "react";
import { ScrollView, View } from "react-native";
import FormField from "./FormField";
interface props<T extends Record<string, any>> {
  page: FormName;
  btn1?: string;
  btn2?: string;
  setOpen: any;
  formData?: T;
  setFormData: React.Dispatch<React.SetStateAction<T>>;
  handleSubmit?: (data: T) => Promise<void>;
  errors?: any;
  sources: Partial<SourcesMap>;
  setErrors?: any;
}

export default function Form<T extends Record<string, any>>({
  handleSubmit,
  errors,
  formData,
  setFormData,
  sources,
  page,
  btn1,
  btn2,
  setOpen,
}: props<T>) {
  const fields = useMemo(() => formSchemas[page], [page]);

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
          {fields.map((field: FormFieldSchema) => {
            const fieldProps = {
              ...field,
              data: field.source ? sources[field.source] : field.data,
            };

            return (
              <FormField
                key={field.name}
                {...fieldProps}
                value={formData?.[field.name]}
                error={errors?.[field.name]}
                onChange={(value: unknown) =>
                  setFormData((prev) => ({
                    ...prev,
                    [field.name]: value,
                  }))
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
              handleSubmit?.(formData as T);
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
