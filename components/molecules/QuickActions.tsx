import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Button from "../atoms/Button";
import Title from "../atoms/Title";

interface Props {
  title: string;
  btn1: string;
  btn2: string;
  btn3: string;
  btn4: string;
  onPressBtn1: () => void;
  onPressBtn2: () => void;
  onPressBtn3: () => void;
  onPressBtn4: () => void;
}

export default function QuickActions({
  onPressBtn1,
  onPressBtn2,
  onPressBtn3,
  onPressBtn4,
  title,
  btn1,
  btn2,
  btn3,
  btn4,
}: Props) {
  const [checked, setChecked] = useState("btn1");

  const actions = [
    {
      id: "btn1",
      text: btn1,
      icon: "plus",
      action: onPressBtn1,
    },
    {
      id: "btn2",
      text: btn2,
      icon: "users",
      action: onPressBtn2,
    },
    {
      id: "btn3",
      text: btn3,
      icon: "calendar",
      action: onPressBtn3,
    },
    {
      id: "btn4",
      text: btn4,
      icon: "book-open",
      action: onPressBtn4,
    },
  ];

  return (
    <View style={styles.container}>
      {/* Title */}
      <View style={styles.titleContainer}>
        <Title size="xl">{title}</Title>
      </View>

      {/* Buttons */}
      <View style={styles.actionsContainer}>
        {actions.map((item) => (
          <View key={item.id} style={styles.buttonWrapper}>
            <Button
              size="xl"
              variant={
                checked === item.id
                  ? "btnPrimary"
                  : "gray"
              }
              textColor={
                checked === item.id
                  ? "secondary"
                  : "primary"
              }
              onClick={() => {
                setChecked(item.id);
                item.action();
              }}
            >
              {item.text}
              <Feather
                name={item.icon as any}
                size={16}
              />
            </Button>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",

    borderRadius: 20,

    padding: 16,

    marginHorizontal: 4,
    marginTop: 10,

    borderWidth: 1,
    borderColor: "#E5E7EB",

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 2,
  },

  titleContainer: {
    marginBottom: 16,
    alignItems:'flex-end',
  },

  actionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    

    justifyContent: "flex-end",

    gap: 12,
  },

  buttonWrapper: {
    width: "40%",
    alignItems:'flex-end'
  },
});