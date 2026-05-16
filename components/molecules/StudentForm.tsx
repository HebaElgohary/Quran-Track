import { getFormFields } from "@/utils/getFormFields";
import React, { useState } from "react";
import { View } from "react-native";
import FormField from "../molecules/form/FormField";
import Button from "../atoms/Button";
import FormHeading from "./form/FormHeading";
import Form from "./form/Form";

export default function StudentForm({ setOpen, open , handleSubmit}: { setOpen: any; open: boolean; handleSubmit?: (data: any) => Promise<void> }) {
 const [formData  , setFormData] = useState({nameAr:'', nameEn:'', level:'', notes:''});
  return (
    <View
      style={{
        backgroundColor: "white",
        padding: 16,
        borderRadius: 10,
      }}
    >
      {/* Header */}
      <FormHeading title="اضافة طالب جديد" name={"x"} setOpen={setOpen} />

      {/* Form Content */}
      <Form formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} page="Students" btn1="اضافة"  btn2="الغاء" setOpen={setOpen} />
     

    
    </View>
  );
}