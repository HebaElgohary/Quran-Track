import React, { useState } from 'react'
import { View } from 'react-native'
import Title from '../atoms/Title'
import Radio from './Radio'

export default function RadioInput(props:any) {
  const [selected, setSelected] = useState();

   const [items, setItems] = useState(props.data);
 
    return (
    <View>
      <Title size="md">{props.label}</Title>
    <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
        {items.map((item)=> <Radio {...item} ischecked={false} key={item.id}  />
      )}
        </View>  
    </View>
  )
}
