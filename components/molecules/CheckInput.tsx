import React, { useState } from "react";
import { View } from "react-native";
import Checkbox from "../atoms/Checkbox";

export default function CheckInput(props: any) {
  const { data } = props;
  console.log(data);
  const [items, setItems] = useState(data);
  console.log("data is from checkbox " + items);
  return (
    <View>
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
