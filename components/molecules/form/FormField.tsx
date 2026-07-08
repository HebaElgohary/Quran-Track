import CheckInput from "@/components/molecules/CheckInput";
import Input from "@/components/molecules/Input";
import React from "react";
import RadioInput from "../RadioInput";
import SelectInput from "../SelectInput";
import DateInput from "../DateInput";
import TimeInput from "../TimeInput";

export default function FormField(props: any) {
  const { type } = props;
  console.log("props is " + type);

  if (type == "text"|| type == "password") return <Input {...props} />;
  if (type == "number") return <Input {...props} />;
if (type === "time") return <TimeInput {...props} />;
  if (type == "textarea") return <Input {...props} multiline />;
  if (type == "radio") return <RadioInput {...props} />;
  if (type == "select") return <SelectInput {...props} />;
  if (type == "checkbox") return <CheckInput {...props} />;
  if (type == "date") return <DateInput {...props} />;
}
