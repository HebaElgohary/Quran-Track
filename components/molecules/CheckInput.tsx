import { colors } from "@/constants/theme";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import Checkbox from "../atoms/Checkbox";

export default function CheckInput({
  data = [],
  label,
  value = [],
  onChange,
}: any) {
  const [items, setItems] = useState(data);

  useEffect(() => {
    setItems(data ?? []);
  }, [data]);

  const toggleItem = (id: number) => {
    const exists = value.includes(id);

    const updated = exists
      ? value.filter((x: number) => x !== id)
      : [...value, id];

    onChange?.(updated);
  };

  return (
    <View
      style={{
        gap: 12,
        marginVertical: 10,
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      {label && (
        <Text
          style={{
            fontSize: 18,
            marginBottom: 4,
            marginHorizontal: 8,
            color: colors.btnPrimary,
            fontWeight: "500",
          }}
        >
          {label}
        </Text>
      )}

      <ScrollView
        style={{
          width: "100%",
          maxHeight: 150,
          borderRadius: 6,
          borderWidth: 1,
          borderColor: colors.gray,
        }}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        <View
          style={{
            backgroundColor: "#fff",
            margin: 10,
            display: "flex",
            flexDirection: "column",
            gap: 6,
            alignItems: "flex-end",
          }}
        >
          {(items ?? []).map((item) => (
            <Checkbox
              key={item.id}
              label={item.name}
              checked={value.includes(item.id)}
              onChange={() => toggleItem(item.id)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}