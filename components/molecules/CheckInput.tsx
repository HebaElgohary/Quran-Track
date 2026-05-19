import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
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

      {items.map((item: any) => (
        <Checkbox
          key={item.id}
          label={item.name}
          checked={item.checked}
          onChange={() => toggleItem(item.id)}
        />
      ))}
    </View>
  );
}