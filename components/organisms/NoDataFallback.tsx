import { View } from "react-native";
import type { ComponentType } from "react";
import Button from "../atoms/Button";
import Subtitle from "../atoms/Subtitle";

interface props {
  Icon: ComponentType;
  text: string;
  btn: string;
}

export default function NoDataFallback({ Icon, text, btn }: props) {
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
        <Button variant="btnPrimary">{btn}</Button>
     <View />

     {/* ///////////////// */}
      </View>

      
      </View>
    
  );
}
