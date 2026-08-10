import { colors } from "@/constants/theme";
import { Feather } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { Platform, Pressable, Text, View } from "react-native";

export default function DateInput({
  label,
  value,
  onChange,
}: {
  label?: string;
  value?: Date | string;
  onChange?: (date: Date) => void;
}) {
  const [show, setShow] = useState(false);

  const selectedDate = value
    ? new Date(value)
    : new Date();

  return (
    <View style={{ width: "100%" }}>
      {label && (
        <Text
          style={{
            marginBottom: 6,
            textAlign: "right",
            marginHorizontal: 8,
            fontSize: 18,
            fontWeight: "800",
            color: colors.btnPrimary,
          }}
        >
          {label}
        </Text>
      )}

      <Pressable
        onPress={() => {
          setShow(true);
        }}
        style={{
          borderWidth: 2,
          borderColor: colors.gray,
          padding: 12,
          borderRadius: 15,
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
            color: colors.btnPrimary,
          }}
        >
          {value
            ? new Date(value).toLocaleDateString("ar-EG")
            : "اختر التاريخ"}
        </Text>

        <Feather
          name="calendar"
          size={20}
          color="#666"
        />
      </Pressable>

      {Platform.OS === "web" ? (
        <input
          type="date"
          value={
            value
              ? new Date(value).toISOString().split("T")[0]
              : ""
          }
          onChange={(e) => {
            if (!e.target.value) return;

            const [year, month, day] = e.target.value
              .split("-")
              .map(Number);

            const newDate = new Date(
              year,
              month - 1,
              day
            );

            // Preserve existing time
            if (value) {
              const oldDate = new Date(value);

              newDate.setHours(
                oldDate.getHours(),
                oldDate.getMinutes(),
                oldDate.getSeconds(),
                oldDate.getMilliseconds()
              );
            }

            onChange?.(newDate);
          }}
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

              if (!date) return;

              const newDate = new Date(date);

              // Preserve the existing time
              if (value) {
                const oldDate = new Date(value);

                newDate.setHours(
                  oldDate.getHours(),
                  oldDate.getMinutes(),
                  oldDate.getSeconds(),
                  oldDate.getMilliseconds()
                );
              }

              console.log(
                "OLD DATE:",
                value
              );

              console.log(
                "NEW DATE:",
                newDate
              );

              onChange?.(newDate);
            }}
          />
        )
      )}
    </View>
  );
}