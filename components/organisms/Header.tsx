import React, { useState } from "react";
import { View } from "react-native";

import Button from "../atoms/Button";
import Heading from "../molecules/Heading";
import FormModal from "../molecules/form/FormModal";

export default function Header({
  title,
  subtitle,
  btn,
}: {
  title: string;
  subtitle: string;
  btn?: string;
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
        <Button size="lg" className=":hover:bg-primary" variant="btnPrimary" name="plus" onClick={() => setOpen(true)}>
          {btn}
        </Button>
      )}
       <FormModal open={open} setOpen={setOpen} />
    </View>
  );
}
