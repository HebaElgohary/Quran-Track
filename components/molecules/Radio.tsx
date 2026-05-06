import React from "react";
import { Pressable, View } from "react-native";

type RadioProps = {
  selected: boolean;
  onPress: () => void;
  color?: string;
};

export default function Radio({
  selected,
  onPress,
  color = "#000",
}: RadioProps) {
  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          width: 24,
          height: 24,
          borderRadius: 15,
          borderWidth:selected? 3 : 0,
          borderColor : selected? 'yellow' : 'gray'      ,     alignItems: "center",
          justifyContent: "center",
        }}
      >
        { (
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 10,
              backgroundColor: color,
              // borderWidth: 2,
            }}
          />
        )}
      </View>
    </Pressable>
  );
}