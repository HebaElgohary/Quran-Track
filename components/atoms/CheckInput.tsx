import React, { useState } from 'react'
import Checkbox from './Checkbox';
import { View } from 'react-native';

export default function CheckInput({...props,data}:{data:any}) {
  const [items, setItems] = useState(data);
    return (
        <View>
  {items.map((item)=> <Checkbox key={item.id}
        label={item.label}
        checked={item.checked}
        onChange={() => {
          const arr=items.map((i)=>{
           return i!=item?i:{...i,checked:!i.checked}
             
            })
          setItems(arr )   
        }}
      />)}
      </View>
  )
}
