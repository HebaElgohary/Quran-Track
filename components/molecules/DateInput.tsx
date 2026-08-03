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
  value?: Date;
  onChange?: (date: Date) => void;
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
          width:'100%',
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
          placeholder="Time"
          value={value ? value.toISOString().split("T")[0] : ""}
          onChange={(e) => onChange?.(new Date(e.target.value))}
          style={{
            marginTop: 8,
            padding: 10,
            borderRadius: 8,
            border: "1px solid #ccc",
            width: "100%",
          }}
        />
      ) :
       (
        show && (
          <DateTimePicker
            value={selectedDate}
            mode="date"
            onChange={(_, date) => {
              setShow(false);

           if (date) {
    const merged = new Date(date);

    if (value) {
        merged.setHours(
            value.getHours(),
            value.getMinutes(),
            0,
            0
        );
    }

    onChange?.(merged);
}
            }}
          />
        )
      )
      }
    </View>
  );
}