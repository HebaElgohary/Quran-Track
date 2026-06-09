import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function DateInput() {
  const [date, setDate] = useState<Date | null>(null);
  const [show, setShow] = useState(false);

  return (
    <View>
      <Pressable
        onPress={() => setShow(true)}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 12,
          borderRadius: 8,
        }}
      >
        <Text>
          {date
            ? date.toLocaleDateString()
            : "اختر التاريخ"}
        </Text>
      </Pressable>

      {show && (
        <DateTimePicker
          value={date || new Date()}
          mode="date"
          onChange={(_, selectedDate) => {
            setShow(false);

            if (selectedDate) {
              setDate(selectedDate);
            }
          }}
        />
      )}
    </View>
  );
}