import { Feather } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { Platform, Pressable, Text, View } from "react-native";

interface Props {
  value?: Date;
  onChange?: (time: Date) => void;
  label?: string;
}

export default function TimeInput({ value, onChange, label }: Props) {
  const [show, setShow] = useState(false);
  const selectedTime = value ?? new Date();

  if (Platform.OS === "web") {
    return (
      <input
        type="time"
        value={`${String(selectedTime.getHours()).padStart(2, "0")}:${String(
          selectedTime.getMinutes(),
        ).padStart(2, "0")}`}
        onChange={(e) => {
          const [hours, minutes] = e.target.value.split(":").map(Number);

          const merged = value ? new Date(value) : new Date();

          merged.setHours(hours, minutes, 0, 0);

          onChange?.(merged);
        }}
      />
    );
  }
  return (
    <View>
      {label && <Text style={{ marginBottom: 6 }}>{label}</Text>}

      <Pressable
        onPress={() => setShow(true)}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 12,
          borderRadius: 8,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>
          {selectedTime.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Text>

        <Feather name="clock" size={20} color="#666" />
      </Pressable>

      {show && (
        <DateTimePicker
          mode="time"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          value={selectedTime}
          is24Hour={false}
          onChange={(_, time) => {
            setShow(false);

            if (time) {
              const merged = value ? new Date(value) : new Date();

              merged.setHours(time.getHours(), time.getMinutes(), 0, 0);

              onChange?.(merged);
            }
          }}
        />
      )}
    </View>
  );
}
