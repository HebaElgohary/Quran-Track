import { View } from "react-native";
import Subtitle from "../atoms/Subtitle";
import Title from "../atoms/Title";
interface props{
    title:string,
    num:number,
    icon?:string
}
export default function HomeCard({title,num,icon}) {
  return (
<View  style={{
        backgroundColor: "white",
        marginHorizontal: "10px",
        padding: "15px",
        borderRaduis: "35px",
        display:'flex',
        flexDirection:'row',
          justifyContent: "space-between",

      }}>
        
       <View>
        <Subtitle>{title}</Subtitle>
        <Title size="xxl">{num}</Title>
       </View>
         <View>
        <Subtitle>icon</Subtitle>
        </View>
        

</View>
  )

}
