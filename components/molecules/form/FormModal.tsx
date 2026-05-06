import { Modal, View } from "react-native";
import StudentForm from "../StudentForm";
import Button from "@/components/atoms/Button";
import { useState } from "react";

export default function FormModal({ open, setOpen }: { open: boolean; setOpen: any }) {
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
    
  <StudentForm setOpen={setOpen} open={open} />

  </View>
</Modal>

    );
}