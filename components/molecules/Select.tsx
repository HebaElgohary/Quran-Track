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
          borderWidth: 2,
          borderRadius: 3,
          padding: 5,
          fontSize:20
        }}
        selectedValue={selected}
        onValueChange={(itemValue) => setSelected(itemValue)}
      >
        {data.map((item) => (
          <Picker.Item key={item.label} label={item.label} value={item.value} />
        ))}
      </Picker>
    </View>
  );
}
