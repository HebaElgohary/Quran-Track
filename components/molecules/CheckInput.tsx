import { colors } from "@/constants/theme";
import { Student } from "@/types/appTypes";
import React from "react";
import {
  ScrollView,
  Text,
  View,
} from "react-native";
import Checkbox from "../atoms/Checkbox";

export default function CheckInput({
  data = [],
  label,
  value = [],
  onChange,
}: any) {
  const toggleItem = (item: any) => {
    const student = item.data ?? item;

    const exists = value.some(
      (s: Student) => s.id === student.id
    );

    const updated = exists
      ? value.filter(
          (s: Student) => s.id !== student.id
        )
      : [...value, student];

    onChange?.(updated);
  };

  return (
    <View
      style={{
        width: "100%",
        marginVertical: 10,
      }}
    >
      {label && (
        <Text
          style={{
            fontSize: 18,
            marginBottom: 8,
            marginHorizontal: 8,
            color: colors.btnPrimary,
            alignSelf: "flex-end",
            fontWeight: "800",
          }}
        >
          {label}
        </Text>
      )}

      {/* CHECKBOX CONTAINER */}
      <View
        style={{
          width: "100%",
          height: 120,
          borderWidth: 1,
          borderColor: colors.gray,
          borderRadius: 8,
        }}
      >
        <ScrollView
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={true}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            paddingVertical: 5,
          }}
        >
          {data.map((item: any) => (
            <Checkbox
              key={String(item.id)}
              label={item.name}
              checked={value.some(
                (s: Student) => s.id === item.id
              )}
              onChange={() => toggleItem(item)}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}