import React from "react";
import { Text, View } from "react-native";
import Select from "./Select";
import { colors } from "@/constants/theme";

interface SelectInputProps {
  label?: string;
  value?: number|null;
  onChange?: (value: number |null) => void;
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
        margin: 5,
        marginHorizontal:'auto',
        width: "90%",
        
      }}
    >
      {label && (
        <Text
          style={{
            fontSize: 18,
            marginBottom: 4,
            marginHorizontal: 8,
            color: colors.btnPrimary,
            fontWeight: "700",
          }}
        >
          {label}
        </Text>
      )}

      <Select
        data={data}
        value={value ?? null}
        onChange={onChange ?? (() => {})}
      />
    </View>
  );
}