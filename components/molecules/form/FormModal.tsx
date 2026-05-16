import { Modal, View } from "react-native";
import {getFormName} from "./getFormName";


type FormNameKey = keyof typeof getFormName;

export default function FormModal({ open, setOpen, formName, handleSubmit }: { open: boolean; setOpen: any; formName?: FormNameKey; handleSubmit?: (data: any) => Promise<void> }) {
  const FormName = formName ? getFormName[formName] : undefined;
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
    
  {FormName ? <FormName 
  setOpen={setOpen} 
  open={open} 
  handleSubmit={handleSubmit} /> : null }

  </View>
</Modal>

    );
}