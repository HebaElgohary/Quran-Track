import React, { useState } from "react";
import { View } from "react-native";
import Button from "../atoms/Button";
import Heading from "../molecules/Heading";
import FormModal from "../molecules/form/FormModal";

export default function Header<T>({
  title,
  subtitle,
  btn,
  formName,
  handleSubmit,
}: {
  title: string;
  subtitle: string;
  btn?: string;
  formName?: "Students" | "Groups" | "Sessions" | "Schedule" | undefined;
  handleSubmit?:(data:T)=>Promise<void>;
}) {
  const [open, setOpen] = useState(false);

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 15,
        marginVertical: 15,
        padding: 1,
      }}
    >
      <Heading title={title} subtitle={subtitle} />
      {btn && (
        <Button
          size="xl"
          name="plus"
          variant="btnPrimary"
          onClick={() => setOpen(true)}
        >
          {btn}
        </Button>
      )}
      {formName && (
        <FormModal<T>
          open={open}
          setOpen={setOpen}
          
          formName={formName}
          handleSubmit={handleSubmit}
        />
      )}
    </View>
  );
}
