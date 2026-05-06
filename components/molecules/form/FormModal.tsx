import { Modal, View } from "react-native";
import StudentForm from "../StudentForm";
import Button from "@/components/atoms/Button";
import { useState } from "react";
import getFormName from "./getFormName";

export default function FormModal({ open, setOpen ,FormName}: { open: boolean; setOpen: any; FormName: string }) {
    return (
        
<Modal
  visible={open}
  animationType="slide"
  transparent
>
  <View style={{
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.4)"
  }}>
    
  {getFormName(FormName, setOpen, open)}

  </View>
</Modal>

    );
}