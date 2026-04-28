import React from "react";
import { Pressable, View } from "react-native";
import Title from "../atoms/Title";

export default function Radio({ label, data,onChange,checked }: any) {
  return (
    <View>
      <Title>{"label"}</Title>

      {data.map((c) => (
        <Pressable
        onPress={onChange}
          key={c.id}
          style={{
            width: 20,
            height: 20,
            borderRadius: "100%",
            backgroundColor: c.color,
            
          } 

        }
          
        />
      ))}
    </View>
  );
}
