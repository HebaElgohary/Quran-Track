import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Button from "../atoms/Button";
import Heading from "../molecules/Heading";
import FormModal from "../molecules/form/FormModal";
import { colors } from "@/constants/theme";

export default function Header<T>({
  title,
  subtitle,
  btn,
  formName,
  handleSubmit,
}: {
  title: string;
  subtitle?: string;
  btn?: string;
  formName?: "Students" | "Groups" | "Sessions" | "Schedule";
  handleSubmit?: (data: T) => Promise<void>;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.heading}>
          <Heading title={title} subtitle={subtitle} />
        </View>

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
      </View>

      {formName && (
        <FormModal<T>
          open={open}
          setOpen={setOpen}
          formName={formName}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginHorizontal: 18,
    marginTop: 18,
    marginBottom: 12,

    paddingHorizontal: 16,
    paddingVertical: 14,

    backgroundColor: colors.white,

    borderRadius: 18,

    elevation: 3,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  heading: {
    flex: 1,
    marginLeft: 16,
  },
});