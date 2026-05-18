import Button from "@/components/atoms/Button";
import { getFormFields } from "@/utils/getFormFields";
import React from "react";
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
  handleSubmit?: (data: T) => Promise<void>;
  errors?: any;
  setErrors?: any;
}

export default function Form<T>({
  handleSubmit,
  errors,
  setErrors,
  formData,
  setFormData,
  page,
  btn1,
  btn2,
  setOpen,
}: props<T>) {
  const onSubmit = () => {
  const validationErrors =
    validateStudent(formData);

  setErrors(validationErrors);

  if (
    Object.keys(validationErrors).length > 0
  ) {
    return;
  }

  if (formData.id) {
    handleSubmit?.(formData);
  } else {
    handleSubmit?.(formData);
  }

  setOpen(false);
};
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
        {getFormFields(page)?.map((field) => (
          <FormField
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
        ))}
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
          onClick={onSubmit}
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
