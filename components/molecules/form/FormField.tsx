import CheckInput from "@/components/molecules/CheckInput";
import Input from "@/components/molecules/Input";
import React from "react";

export default function FormField(props: any) {
  const { type } = props;
  console.log("props is " + type);

  if (type == "text" || type == "radio") return <Input {...props} />;
  if (type == "textarea") return <Input {...props} />;
  if (type == "checkbox") return <CheckInput {...props} />;
}
