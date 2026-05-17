import { View } from "react-native";
import Subtitle from "../atoms/Subtitle";
import Title from "../atoms/Title";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/constants/theme";
interface props{
    title:string,
    num:number,
    icon?:string
}
export default function HomeCard({title,num,icon}:props) {
  return (
<View  style={{
        backgroundColor: "white",
        marginHorizontal: "10px",
        padding: "15px",
        borderRadius: 10,
        borderWidth:1,
        borderColor:'#ccc',
        display:'flex',
        flexDirection:'row',
          justifyContent: "space-between",

      }}>
        
       <View style={{display:'flex',flexDirection:'column',gap:10,alignItems:'center'}}>
        <Subtitle>{title}</Subtitle>
        <Title size="xl">{num}</Title>
       </View>
         <View style={{display:'flex',justifyContent:'center',alignItems:'center',borderRadius:15,paddingHorizontal:20,gap:10,backgroundColor:'#F1E7D0'}}>
       <Feather name={icon} size={25} color={colors.btnPrimary} />
        </View>
        

</View>
  )

}
