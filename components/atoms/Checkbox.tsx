import { Pressable, Text, View } from "react-native";
import {Ionicons} from'@expo/vector-icons'
import { colors } from "@/constants/theme";
interface props {
  label: string;
  checked: boolean;
  onChange: () => void;
}
export default function Checkbox({ label, checked, onChange }: props) {
  return (

    <View style={{marginHorizontal:10 ,display:'flex',flexDirection:'row-reverse' ,gap:5,alignItems:'center',marginVertical:6}}>
      <View><Text style={{fontSize: 16}}>{label}</Text></View>
       
        <Pressable onPress={onChange}>  
           <View style={{ width: 20, height: 20, backgroundColor: "#eee"  }}>
        {checked&& <Ionicons name='checkbox' color={colors.btnPrimary}  size={20}/>}
      </View></Pressable>
   
    </View>
  );
}
