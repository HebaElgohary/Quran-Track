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
  onValueChange={(itemValue) => onChange(Number(itemValue))}
>
  <Picker.Item label="اختر الطالب" value={0} color="#999" />

  {(data ?? []).map((item) => (
    <Picker.Item
      key={item.id}
      label={item.label}
      value={item.id}
    />
  ))}
</Picker>
    </View>
  );
}
