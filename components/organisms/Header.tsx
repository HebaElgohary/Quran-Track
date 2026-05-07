import React, { useState } from "react";
import { View } from "react-native";

import Button from "../atoms/Button";
import Heading from "../molecules/Heading";
import FormModal from "../molecules/form/FormModal";

export default function Header({
  title,
  subtitle,
  btn,
  formName,
}: {
  title: string;
  subtitle: string;
  btn?: string;
  formName?: "Students" | "Groups" | "Sessions" | "Schedule" | undefined;
}) {
  const [open, setOpen] = useState(false);

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 3,
        marginVertical: 15,
        padding: 1,
      }}
    >
      <Heading title={title} subtitle={subtitle} />
      {btn && (
        <Button size="lg"  variant="btnPrimary" name="plus" onClick={() => setOpen(true)}>
          {btn}
        </Button>
      )}
       {formName && <FormModal open={open} setOpen={setOpen} formName={formName} />}
    </View>
  );
}
