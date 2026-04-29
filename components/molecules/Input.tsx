import { Text, TextInput, View } from "react-native";
import Title from "../atoms/Title";
import { colors } from "@/constants/theme";

export default function Input(props: any) {
  const { type } = props;
  type == "text" ? console.log("text") : console.log("textarea");
  return (
    <View style={{gap:2}}>
      <Text style={{fontSize:15,color:colors.btnPrimary}}>{props.label}</Text>
      <TextInput
        {...props}
        style={{
          borderRadius: 3,
          borderColor: colors.gray,
          padding:5,
          borderWidth: 2,
          margin: 5,
        }}
      />
    </View>
  );
}
