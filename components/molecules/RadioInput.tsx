import React, { useState } from 'react'
import { Text, View } from 'react-native'
import Title from '../atoms/Title'
import Radio from './Radio'
import { colors } from '@/constants/theme';

export default function RadioInput(props:any) {
  const [selected, setSelected] = useState();

   const [items, setItems] = useState(props.data);
 
    return (
    <View>
      <Text style={{fontSize:15,color:colors.btnPrimary,marginVertical:6}}>{props.label}</Text>
    <View style={{ display: "flex", flexDirection: "row", gap: 9 }}>
        {items.map((item)=> <Radio {...item} ischecked={false} key={item.id}  />
      )}
        </View>  
    </View>
  )
}
