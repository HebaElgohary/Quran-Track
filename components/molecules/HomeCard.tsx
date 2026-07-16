import { colors } from "@/constants/theme";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import Subtitle from "../atoms/Subtitle";
import Title from "../atoms/Title";

interface Props {
  title: string;
  num: number;
  icon?: string;
}

type NameType = "file-text" | "calendar" | "users" | "book-open";

export default function HomeCard({ title, num, icon }: Props) {
  return (
    <View style={styles.card}>
      {/* Text */}
      <View style={styles.content}>
        <Subtitle size="md">{title}</Subtitle>
        <Title size="xl">{num}</Title>
      </View>

      {/* Icon */}
      <View style={styles.iconContainer}>
        <Feather
          name={icon as NameType}
          size={24}
          color={colors.btnPrimary}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",

    minHeight: 110,
    paddingHorizontal: 16,
    paddingVertical: 18,

    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",

    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 2,
  },

  content: {
    flex: 1,
    alignItems:'flex-start',

marginHorizontal:14,
    justifyContent: "center",
    gap: 8,
  },

  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#F8F2E4",

    justifyContent: "center",
    alignItems: "center",
  },
});