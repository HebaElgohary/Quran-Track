import { View } from "react-native";
import Subtitle from "../atoms/Subtitle";
import Title from "../atoms/Title";
import Button from "../atoms/Button";
interface props{
    title:string,
    btn1:string,
    btn2:string,
    btn3:string,
    btn4:string


   
}
export default function QuickActions({title,btn1,btn2,btn3,btn4}:props) {
  return (
<View  style={{
        backgroundColor: "white",
        marginHorizontal: "10px",
        marginVertical: "30px",

        padding: "15px",
        borderRaduis: "35px",
        gap:10,
        display:'flex',
        flexDirection:'column',
          justifyContent: "space-between",

      }}>
        
       <View>
        <Title size="xxl"> {title}</Title>
       </View>
       {/* btns container */}
         <View style={{gap:10 }}>
            <View style={{display:'flex',flexDirection:'row',gap:10}}>
                <Button size="lg">{btn1}</Button>
            <Button size="lg">{btn2}</Button>
            </View>
            
            <View style={{display:'flex',flexDirection:'row',gap:10}}>
                 <Button size="lg">{btn3}</Button>
            <Button size="lg">{btn4}</Button>
            </View>
           

        </View>
       {/* btns container */}

        

</View>
  )

}
