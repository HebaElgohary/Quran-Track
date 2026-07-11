import { colors } from "@/constants/theme";
import React from "react";
import { View, Text, Image } from "react-native";

type Props = {
  name: string;
  image?: string;
};

export default function Avatar({ name, image }: Props) {
  if (image) {
    return (
      <Image
        source={{ uri: image }}
        style={{
          width: 60,
          height: 60,
          borderRadius: 30,
        }}
      />
    );
  }

  return (
    <View
      style={{
        backgroundColor: colors.gray,
        width: 60,
        height: 60,
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontSize: 22,
          fontWeight: "600",
        }}
      >
        {name?.charAt(0)}
      </Text>
    </View>
  );
}