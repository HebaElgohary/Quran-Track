import React, { useState } from "react";
import { Pressable, View } from "react-native";
import Title from "../atoms/Title";

export default function Radio(props: any) {
  const [items, setItems] = useState(props.data);
  const[selected,setSelected]=useState (false)

  return (
    <View>
      <Title>{props.label}</Title>
<View style={{display:'flex',flexDirection:'row',gap:5}}>
      {items.map((c) => (
        <Pressable
          onPress={() => {
        setSelected(!selected)
          }}
          key={c.id}
          style={
          selected?{
            width: 20,
            height: 20,
            borderRadius: "100%",
            backgroundColor: c.color,
            borderColor:'yellow',
            borderWidth:2
            
          }:{
            width: 20,
            height: 20,
            borderRadius: "100%",
            backgroundColor: c.color,

            
          }
        }
        />
      ))}
      </View>
    </View>
  );
}
