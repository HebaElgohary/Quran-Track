import { colors } from "@/constants/theme";
import { Picker } from "@react-native-picker/picker";
import { View } from "react-native";
export default function Select({ data, value, onChange }: { data: any, value: any, onChange: any }) {
  console.log("SELECT DATA", data);

  return (
    <View>
      <Picker
        style={{
          borderColor: colors.gray,
          borderWidth: 1,
          borderRadius: 10,
          padding: 12,
          width: 200,
          fontSize:20,
          backgroundColor: colors.transparent,
          // alignSelf: "end",
          
        }}
          selectedValue={value}
      onValueChange={(itemValue) =>
        onChange(itemValue)
      }
      >
     {(data ?? []).map((item:{label:string,value:string,id:number,checked:boolean}) => (
  <Picker.Item
    key={item.label}
    label={item.label}
    value={item.value}
  />
))}
      </Picker>
    </View>
  );
}
