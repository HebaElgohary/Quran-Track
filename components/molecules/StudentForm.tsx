import { getFormFields } from "@/utils/getFormFields";
import React from "react";
import { View } from "react-native";
import FormField from "../molecules/form/FormField";
import Button from "../atoms/Button";
import FormHeading from "./form/FormHeading";

export default function StudentForm({ setOpen, open }: { setOpen: any; open: boolean }) {
  return (
    <View
      style={{
        backgroundColor: "white",
        padding: 16,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}
    >
      {/* Header */}
      <FormHeading title="موعد حصة جديدة" name={"x"} setOpen={setOpen} />

      {/* Form Content */}
      <View style={{ marginVertical: 14 }}>
        {getFormFields("Students")?.map((field) => (
          <FormField key={field?.label} {...field} />
        ))}
      </View>

      {/* Actions */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          gap: 10,
          marginTop: 20,
        }}
      >
        <Button
          size="md"
          variant="gray"
          textColor="black"
          onClick={() => {
            console.log("cancel clicked");
            setOpen(!open);
          }}
        >
          الغاء
        </Button>

        <Button
          size="md"
          textColor="white"
          onClick={() => {
            console.log("add clicked");
            setOpen(!open);
          }}
        >
          اضافة
        </Button>
      </View>
    </View>
  );
}