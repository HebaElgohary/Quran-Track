import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Checkbox from "../atoms/Checkbox";
import Title from "../atoms/Title";

export default function CheckInput({ data = [], label, onChange }: any) {
  const [items, setItems] = useState(data);

  // sync with props update
  useEffect(() => {
    setItems(data);
  }, [data]);

  const toggleItem = (id: string | number) => {
    const updated = items.map((item: any) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setItems(updated);

    // optional: lift state up
    onChange?.(updated);
  };

  return (
    <View>
      {label && <Title size="md">{label}</Title>}

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