import CheckInput from "@/components/molecules/CheckInput";
import Input from "@/components/molecules/Input";
import React from "react";
import Radio from "../Radio";
import RadioInput from "../RadioInput";

export default function FormField(props: any) {
  const { type } = props;
  console.log("props is " + type);

  if (type == "text" ) return <Input {...props} />;
  if (type == "textarea") return <Input {...props} />;
    if (type == "radio") return <RadioInput {...props} />;

  if (type == "checkbox") return <CheckInput {...props} />;
}
