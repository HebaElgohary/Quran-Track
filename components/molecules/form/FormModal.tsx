import { Modal, View } from "react-native";
import StudentForm from "../StudentForm";
import Button from "@/components/atoms/Button";

export default function FormModal({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
    return (
        
<Modal
  visible={open}
  animationType="slide"
  transparent
>
  <View style={{
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.4)"
  }}>
    
  <StudentForm />
   <Button onClick={() => setOpen(false)}>
        Close
      </Button>
  </View>
</Modal>

    );
}