import React from "react";
import { View } from "react-native";

import Button from "../atoms/Button";
import Heading from "../molecules/Heading";

export default function Header({
  title,
  subtitle,
  btn,
}: {
  title: string;
  subtitle: string;
  btn?: string;
}) {
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
        <Button size="xl" variant="btnPrimary" name="plus">
          {btn}
        </Button>
      )}
    </View>
  );
}
