import { View } from "react-native";
import Button from "../atoms/Button";
import Subtitle from "../atoms/Subtitle";

interface props {
  Icon: React.ComponentType<{ size: number }>;
  text: string;
  btn: string;
}

export default function NoDataFallback({ Icon, text, btn }: props) {
  return (
    <View
      style={{
        width: "90%",
        backgroundColor: "white",
        height: 150,
        // padding:10,
        display:'flex'
        ,flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal: "5%",
        borderRadius: 10,
      }}
    >
      <View style={{display:'flex' ,alignItems:'center'}}>
        {/* <Icon size={size}/> */}

        <Subtitle>{text}</Subtitle>
        <Button>{btn}</Button>
      </View>
    </View>
  );
}
