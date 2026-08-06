import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { colors } from "@/constants/theme";
import Button from "../atoms/Button";
import Heading from "../molecules/Heading";
import FormModal from "../molecules/form/FormModal";
import Hr from "../atoms/Hr";

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
    < View style={{display:'flex', alignItems:'flex-end',marginHorizontal:30}}>
      <View style={styles.container}>
        <View style={styles.leftSection}>
          <View style={styles.accent} />

          <View style={styles.heading}>
            <Heading
              title={title}
              subtitle={subtitle}
            />
          </View>
        </View>
        {btn && (
          <Button
            size="xl"
            variant="btnPrimary"
            name="plus"
            onClick={() => setOpen(true)}
          >
            {btn}
          </Button>
        )}

      </View>
<Hr style={{marginHorizontal:10,marginTop:10,marginBottom:20,width:220,height:1,borderRadius:30}}></Hr>

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

const styles = StyleSheet.create({
  container: {
     width: "100%",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",

    // marginHorizontal: 10,
    marginTop: 24,
    marginBottom: 1,
  },

  leftSection: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap:10,
    marginRight: 1,
  },

  accent: {
    width: 5,
    height: 66,
    borderRadius: 18,
    backgroundColor: colors.primary,
    marginTop: 2,
  },

  heading: {
    justifyContent: "center",
     alignItems: "flex-end",
     width: 240,
    //  backgroundColor:'#eeee',
  flexShrink: 1,
  },
});