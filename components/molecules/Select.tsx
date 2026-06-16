import React from "react";
import { View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { colors } from "@/constants/theme";

interface SelectProps {
  data: any[];
  value: string | number;
  onChange: (value: number) => void;
}

export default function Select({
  data,
  value,
  onChange,
}: SelectProps) {
  return (
    <View>
      <Dropdown
        style={{
          height: 56,
          borderWidth: 1,
          borderColor: colors.gray,
          borderRadius: 14,
          paddingHorizontal: 16,
          backgroundColor: "#fff",
        }}
        placeholderStyle={{
          color: "#999",
          fontSize: 16,
          textAlign: "right",
        }}
        selectedTextStyle={{
          color: "#222",
          fontSize: 16,
          textAlign: "right",
        }}
        containerStyle={{
          borderRadius: 14,
          overflow: "hidden",
        }}
        itemTextStyle={{
          textAlign: "right",
        }}
        data={data}
        labelField="label"
        valueField="value"
        
        value={value}
        onChange={(item) => onChange(item.value)}
      />
    </View>
  );
}