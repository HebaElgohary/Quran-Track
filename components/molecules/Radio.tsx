import React from "react";
import { Pressable, View } from "react-native";

type ColorRadioProps = {
  selected: boolean;
  onPress: () => void;
  color: string;
};

export default function ColorRadio({
  selected,
  onPress,
  color,
}: ColorRadioProps) {
  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          width: 32,
          height: 32,
          borderRadius: 16,
          backgroundColor: color,
          alignItems: "center",
          justifyContent: "center",

          // border when selected
          borderWidth: selected ? 3 : 1,
          borderColor: selected ? "#000" : "#ddd",
        }}
      >
        {selected && (
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: "#fff",
            }}
          />
        )}
      </View>
    </Pressable>
  );
}