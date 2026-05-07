import { colors } from "@/constants/theme";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { View } from "react-native";
export default function Select({ data }: { data: any }) {
  const [selected, setSelected] = useState("");

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
          
        }}
        selectedValue={selected}
        onValueChange={(itemValue) => setSelected(itemValue)}
      >
        {data.map((item: { label: string; value: string }) => (
          <Picker.Item key={item.label} label={item.label} value={item.value}  />
        ))}
      </Picker>
    </View>
  );
}
