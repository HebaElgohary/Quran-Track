import React, { useState } from "react";
import { Platform, Pressable, Text, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Feather } from "@expo/vector-icons";

export default function DateInput({
  label,
  value,
  onChange,
}: {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
}) {
  const [show, setShow] = useState(false);

  const selectedDate = value ? new Date(value) : new Date();

  return (
    <View>
      {label && (
        <Text
          style={{
            marginBottom: 6,
            textAlign: "right",
            fontSize: 16,
            fontWeight: "500",
          }}
        >
          {label}
        </Text>
      )}

      <Pressable
        onPress={() => {
          console.log("pressed");
          setShow(true);
        }}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 12,
          borderRadius: 8,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <Text
          style={{
            color: value ? "#000" : "#888",
            fontSize: 16,
          }}
        >
          {value
            ? new Date(value).toLocaleDateString("ar-EG")
            : "اختر التاريخ"}
        </Text>

        <Feather name="calendar" size={20} color="#666" />
      </Pressable>

      {Platform.OS === "web" ? (
        <input
          type="date"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          style={{
            marginTop: 8,
            padding: 10,
            borderRadius: 8,
            border: "1px solid #ccc",
            width: "100%",
          }}
        />
      ) : (
        show && (
          <DateTimePicker
            value={selectedDate}
            mode="date"
            onChange={(_, date) => {
              setShow(false);

              if (date) {
                onChange?.(date.toISOString());
              }
            }}
          />
        )
      )}
    </View>
  );
}