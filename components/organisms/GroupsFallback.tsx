import {  View } from "react-native";
import Subtitle from "../atoms/Subtitle";
import Button from "../atoms/Button";

interface props
    {Icon:React.ComponentType<{size:number}>
      ,text:string
      ,btn:string
    }  

export default function GroupsFallback({Icon,text,btn}:props) {
  return (
    <View style={{width:'90%' , backgroundColor:'white',height:150, marginHorizontal:'5%',borderRadius:10}}>
        <View>
{/* <Icon size={size}/> */}

<Subtitle >{text}</Subtitle>
<Button>{btn}</Button>
        </View>
    </View>
  )
}
