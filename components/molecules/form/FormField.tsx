import CheckInput from "@/components/molecules/CheckInput";
import Input from "@/components/molecules/Input";
import React from "react";
import Radio from "../Radio";

export default function FormField(props: any) {
  const { type } = props;
  console.log("props is " + type);

  if (type == "text" ) return <Input {...props} />;
  if (type == "textarea") return <Input {...props} />;
    if (type == "radio") return <Radio {...props} />;

  if (type == "checkbox") return <CheckInput {...props} />;
}
