import React, { useState } from "react";
import { Pressable, View } from "react-native";

export default function Radio(props: any) {
  const [selected, setSelected] = useState(props.ischecked);

  return (
    <View>
      <View >
        <Pressable
          onPress={() => {
            setSelected(!selected);
          }}
          style={
            selected
              ? {
                  width: 20,
                  height: 20,
                  borderRadius: "100%",
                  backgroundColor: props.color,
                  borderColor: "yellow",
                  borderWidth: 2,
                }
              : {
                  width: 20,
                  height: 20,
                  borderRadius: "100%",
                  backgroundColor: props.color,
                }
          }
        />
      </View>
    </View>
  );
}
