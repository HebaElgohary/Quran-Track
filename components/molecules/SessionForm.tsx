import React from "react";
import { View } from "react-native";
import Form from "./form/Form";
import FormHeading from "./form/FormHeading";
import { useSessionForm } from "@/hooks/useSessionForm";
import { Session } from "@/types/appTypes";

export default function SessionForm<T>({
  handleSubmit,
  setOpen,
  open,
  formData:session,
}: {
  handleSubmit?: (data: T) => Promise<void>;
  setOpen: any;
  open: boolean;
  formData?: T;
}) {
const { formData, setFormData, errors, reset } =  useSessionForm(session as Session)
  return (
    <View
      style={{
        backgroundColor: "white",
        padding: 20,
        overflow: "scroll",
        maxHeight: "85%",
        borderRadius: 10,
      }}
    >
      {/* form heading */}
      <FormHeading title="تقرير حصة جديدة " name={"x"} setOpen={setOpen} />
      {/* /////////////////// */}
      <Form<T>
        handleSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
        page="Sessions"
        btn1={"الغاء"}
        btn2={"اضافة"}
        setOpen={setOpen}
      />
    </View>
  );
}
