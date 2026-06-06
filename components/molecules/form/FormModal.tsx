import { Modal, View } from "react-native";
import {getFormName} from "./getFormName";
import { FormData } from "@/types/appTypes";


type FormNameKey = keyof typeof getFormName;

export default function FormModal<T>({data,formData, open, setOpen, formName, handleSubmit }: { data?: FormData; formData?: any; open: boolean; setOpen: any; formName?: FormNameKey; handleSubmit?: (data: T) => Promise<void>; }) {
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
  formData={formData}
  setOpen={setOpen} 
  open={open} 
  handleSubmit={handleSubmit} /> : null }

  </View>
</Modal>

    );
}