import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import Checkbox from "../atoms/Checkbox";
import { colors } from "@/constants/theme";

export default function CheckInput({ data = [], label, onChange }: any) {
  const [items, setItems] = useState(data);
  const [checked, setChecked] = useState([]);
console.log('Checkbox',data)
  // sync with props update
  useEffect(() => {
    setItems(data);
  }, [data]);

  const toggleItem = (id: string | number) => {
    const updated = items.map((item: any) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setItems(updated);
    // array of checked users id 
const checkedItems = updated.filter((item: any) => item.checked);
    setChecked(checkedItems.map((item: any) => item.id));
    ////////////////////////
    // optional: lift state up
    onChange?.(updated);
  };

  return (
    <View style={{ gap: 12, marginVertical: 10, display: "flex", alignItems: "flex-end" }}>
      {label && <Text style={ {
          fontSize: 18,
          marginBottom: 4,
          marginHorizontal: 8,
          color: colors.btnPrimary,
          fontWeight: "500",
      
        }} >{label}</Text>}
        
        <ScrollView
  style={{    width: "100%",
    maxHeight: 150,   borderRadius: 6,
   borderWidth: 1,
   borderColor: colors.gray, }}
  contentContainerStyle={{
    paddingBottom: 20,
  }}
>
<View style={{ backgroundColor: '#fff',

   margin: 10,
 

    display:'flex'
    ,flexDirection:'column'
    ,gap:6,
    alignItems:'flex-end' }}>
      {items.map((item: any) => (
        <Checkbox
          key={item.id}
          label={item.name}
          checked={item.checked}
          onChange={() => toggleItem(item.id)}
        />
      ))}
    </View>
    </ScrollView>
    </View>
  );
}