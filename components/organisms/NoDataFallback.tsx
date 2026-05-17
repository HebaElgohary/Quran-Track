import { View } from "react-native";
import { useState, type ComponentType } from "react";
import Button from "../atoms/Button";
import Subtitle from "../atoms/Subtitle";
import Form from "../molecules/form/Form";
import FormModal from "../molecules/form/FormModal";

interface props {
  Icon: ComponentType;
  text: string;
  btn: string;
  formName?: "Students" | "Groups" | "Sessions" | "Schedule" | undefined;
}

export default function NoDataFallback({formName, Icon, text, btn }: props) {
 const [open, setOpen] = useState(false);
  return (
    <View
      style={{
        backgroundColor: "white",
        padding:16,
        display:'flex'

        ,flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal: 15,
        borderRadius: 10,
      }}
    >
      {/* icon */}
      <View style={{display:'flex' ,alignItems:'center'}}>
        <Icon />
      </View>
      {/* ////////////// */}

{/* Text */}
      <View  style={{display:'flex' ,alignItems:'center'}}>
        <Subtitle>{text}</Subtitle>
        <Button variant="btnPrimary" size="xl" name="plus" onClick={() => {setOpen(true);}}>{btn}</Button>
     <View />

     {/* ///////////////// */}
      </View>

      <FormModal  open={open} setOpen={setOpen} formName={formName} />
      </View>
    
  );
}
