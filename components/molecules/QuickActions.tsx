import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { View } from "react-native";
import Button from "../atoms/Button";
import Title from "../atoms/Title";
interface props {
  title: string;
  btn1: string;
  btn2: string;
  btn3: string;
  btn4: string;
}
export default function QuickActions({ title, btn1, btn2, btn3, btn4 }: props) {
  const [checked, setChecked] = useState("btn1");
  return (
    <View
      style={{
        backgroundColor: "white",
        marginHorizontal: "10px",
        marginVertical: "30px",

        padding: "15px",
        borderRaduis: "35px",
        gap: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <View style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        <Title size="xl"> {title}</Title>
      </View>
      {/* btns container */}
      <View
        style={{
          gap: 30,
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <Button
            variant={checked === "btn1" ? "btnPrimary" : "gray"}
            textColor={checked === "btn1" ? "secondary" : "primary"}
          
            onclick={() => {}}
            size="xl"
          >
            {btn1}
            <Feather name={"plus"} />
          </Button>
          <Button
            variant={checked === "btn2" ? "btnPrimary" : "gray"}
            textColor={checked === "btn2" ? "secondary" : "primary"}
            
            size="xl"
          >
            {btn2} <Feather name={"users"} />
          </Button>
        </View>

        <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <Button
            variant={checked === "btn3" ? "btnPrimary" : "gray"}
            textColor={checked === "btn3" ? "secondary" : "primary"}
           
            size="xl"
          >
            {btn3} <Feather name={"calendar"} />{" "}
          </Button>
          <Button
            size="xl"
            textColor={checked === "btn4" ? "secondary" : "primary"}
            
            variant={checked === "btn4" ? "btnPrimary" : "gray"}
          >
            {btn4} <Feather name={"book-open"} />
          </Button>
        </View>
      </View>
      {/* btns container */}
    </View>
  );
}
