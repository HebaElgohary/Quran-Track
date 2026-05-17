import Button from "@/components/atoms/Button";
import { getFormFields } from "@/utils/getFormFields";
import React from "react";
import { View } from "react-native";
import FormField from "./FormField";
interface props {
  page: "Students" | "Groups" | "Schedule" | "Session";
  btn1?: string;
  btn2?: string;
  setOpen: any;
  formData?: any;
  setFormData?: any;
  handleSubmit?: any;
}

export default function Form({
  handleSubmit,
  formData,
  setFormData,
  page,
  btn1,
  btn2,
  setOpen,
}: props) {
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
          onClick={() => {
            console.log(formData);
            formData.id
              ? handleSubmit(formData.id, formData)
              : handleSubmit(formData);
            setOpen(false);
          }}
        >
          {formData.id ? "تعديل" : btn1}{" "}
        </Button>

        <Button size="sm" textColor="white" onClick={() => setOpen(false)}>
          {" "}
          {btn2}
        </Button>
      </View>
    </View>
  );
}
