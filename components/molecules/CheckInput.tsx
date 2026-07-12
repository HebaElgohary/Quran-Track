import { colors } from "@/constants/theme";
import { Student } from "@/types/appTypes";
import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import Checkbox from "../atoms/Checkbox";

export default function CheckInput({
  data = [],
  label,
  value = [],
  onChange,
}: any) {
  const [items, setItems] = useState(data);

  useEffect(() => {
    setItems(data ?? []);
  }, [data]);


  const toggleItem = (item: any) => {
    console.log("clicked item", item);

    const student = item.data;

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
        gap: 12,
        marginVertical: 10,
        width: "100%",
        display:'flex',alignItems:'flex-start'
      }}
    >

      {label && (
        <Text
          style={{
            fontSize: 18,
            marginBottom: 4,
            marginHorizontal: 8,
            color: colors.btnPrimary,
            fontWeight: "500",
          }}
        >
          {label}
        </Text>
      )}


      <View
        style={{
          width: "100%",
          maxHeight: 100,
          borderRadius: 6,
          borderWidth: 1,
          borderColor: colors.gray,
          overflow:'scroll',
          display:'flex',
          // direction:'rtl',
          alignItems:'flex-start'

        }}
      >

        <FlatList
          data={items}
          keyExtractor={(item) =>
            String(item.id)
          }

          nestedScrollEnabled={true}

          renderItem={({item}) => (
            <Checkbox
              label={item.name}
              checked={
                value.some(
                  (s: Student) =>
                    s.id === item.id
                )
              }
              onChange={() =>
                toggleItem(item)
              }
            />
          )}

          showsVerticalScrollIndicator={true}
        />

      </View>

    </View>
  );
}