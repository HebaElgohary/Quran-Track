import React from "react";
import { Text, View } from "react-native";
import Select from "./Select";
import { colors } from "@/constants/theme";

interface SelectInputProps {
  label?: string;
  value?: number;
  onChange?: (value: number) => void;
  data: any[];
}

export default function SelectInput({
  label,
  value,
  onChange,
  data,
}: SelectInputProps) {
  return (
    <View
      style={{
        gap: 7,
        marginVertical: 10,
        width: "100%",
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

      <Select
        data={data}
        value={value ?? 0}
        onChange={onChange ?? (() => {})}
      />
    </View>
  );
}