import { colors } from "@/constants/theme";
import React from "react";
import { Image, Text, View } from "react-native";

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
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontSize: 26,
          fontWeight: "600",
          color: colors.btnPrimary,
        }}
      >
        {name?.charAt(0)}
      </Text>
    </View>
  );
}
