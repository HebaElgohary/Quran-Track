import DateTimePicker from "@react-native-community/datetimepicker";
import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { Platform, Pressable, Text, View } from "react-native";

interface Props {
  value?: Date;
  onChange?: (date: Date) => void;
  label?: string;
}

export default function TimeInput({
  value,
  onChange,
  label,
}: Props) {
  const [show, setShow] = useState(false);

  const selectedTime = value ?? new Date();

  return (
    <View>
      {label && (
        <Text style={{ marginBottom: 6 }}>
          {label}
        </Text>
      )}

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
          {selectedTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Text>

        <Feather
          name="clock"
          size={20}
          color="#666"
        />
      </Pressable>

      {show && (
        <DateTimePicker
          mode="time"
          value={selectedTime}
          is24Hour={false}
          onChange={(_, date) => {
            setShow(false);

            if (date) {
              onChange?.(date);
            }
          }}
        />
      )}
    </View>
  );
}