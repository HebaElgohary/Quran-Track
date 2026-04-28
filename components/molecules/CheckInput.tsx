import React, { useState } from "react";
import { Text, View } from "react-native";
import Checkbox from "../atoms/Checkbox";
import Title from "../atoms/Title";

export default function CheckInput(props: any) {
  const { data } = props;
  console.log(data);
  const [items, setItems] = useState(data);
  console.log("data is from checkbox " + items);
  return (
    <View>
      <Title size="md">{props.label}</Title>
      {items.map((item) => (
        <Checkbox
          key={item.id}
          label={item.name}
          checked={item.checked}
          onChange={() => {
            const arr = items.map((i) => {
              return i != item ? i : { ...i, checked: !i.checked };
            });
            setItems(arr);
          }}
        />
      ))}
    </View>
  );
}
