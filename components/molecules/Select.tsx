import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { View } from "react-native";
export default function Select({data }: {data:any}) {
    const [selected, setSelected] = useState("");

  return (
    <View>
      
      <Picker
      style={{width:'full'}}
        selectedValue={selected}
        onValueChange={(itemValue) => setSelected(itemValue)}
      >
      
         {data.map((item)=> <Picker.Item key={item.label} 
          label={item.label}
           value={item.value} />
         )}
      </Picker>
   

    </View>
  );
}
