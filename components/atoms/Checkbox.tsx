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

    <View style={{marginHorizontal:10, display:'flex',flexDirection:'row' ,gap:5,alignItems:'center',marginVertical:6}}>
        <Pressable onPress={onChange}>   <View style={{ width: 10, height: 10, backgroundColor: "#eee"  }}>
        {checked&& <Ionicons name='checkbox' color={colors.btnPrimary} />}
      </View></Pressable>
   
      <View><Text>{label}</Text></View>
    </View>
  );
}
