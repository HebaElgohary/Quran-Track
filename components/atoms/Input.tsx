import { TextInput, View } from "react-native";
import Title from "./Title";

export default function Input(props: any) {
  const {type}=props
 type=='text'? console.log('text'):console.log('textarea');
  return (
    <View>
      <Title>{props.label}</Title>
      <TextInput
        {...props}
        style={{ borderRadius: 3,
           borderColor: "black",
            borderWidth: 2,
          margin:5,
          }}
      />
    </View>
  );
}
