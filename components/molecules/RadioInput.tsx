import React, { useState } from "react";
import { Text, View } from "react-native";
import Radio from "./Radio";
import { colors } from "@/constants/theme";

type Item = {
  id: string | number;
  color?: string;
};

type Props = {
  data: Item[];
  label?: string;
  onChange?: (value: string | number) => void;
};

export default function RadioInput({ data = [], label, onChange }: Props) {
  const [selectedId, setSelectedId] = useState<string | number | null>(null);

  const handleSelect = (id: string | number) => {
    setSelectedId(id);
    onChange?.(id);
  };

  return (
    <View style={{ gap: 10, marginVertical: 10 ,display:'flex',alignItems:'flex-end',}}>
      {label && (
        <Text
          style={{
            fontSize: 15,
            color: colors.btnPrimary,
            marginVertical: 6,
          }}
        >
          {label}
        </Text>
      )}

      <View style={{ flexDirection: "row", gap: 10 }}>
        {data.map((item) => (
          <Radio
            key={item.id}
            color={item.color}
            selected={selectedId === item.id}
            onPress={() => handleSelect(item.id)}
          />
        ))}
      </View>
    </View>
  );
}